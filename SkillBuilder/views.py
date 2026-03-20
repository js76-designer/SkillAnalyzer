import json
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from .models import Career, SearchHistory


def login_view(request):
    if request.user.is_authenticated:
        return redirect('home')

    error = None

    if request.method == "POST":
        if 'login' in request.POST:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                error = "Invalid username or password"

        elif 'signup' in request.POST:
            username = request.POST.get('username')
            email    = request.POST.get('email')
            password1 = request.POST.get('password1')
            password2 = request.POST.get('password2')

            if password1 == password2:
                if not User.objects.filter(username=username).exists():
                    User.objects.create_user(username=username, email=email, password=password1)
                    error = "Account created! Please login."
                else:
                    error = "Username already exists"
            else:
                error = "Passwords do not match"

    return render(request, 'login.html', {'error': error, 'request': request})


@login_required(login_url='login')
def home(request):
    careers = Career.objects.all()
    return render(request, 'home.html', {'careers': careers})


@login_required(login_url='login')
@require_POST
def save_search(request):
    try:
        data = json.loads(request.body)
        SearchHistory.objects.create(
            user=request.user,
            career_goal=data.get('career_goal', ''),
            skills_entered=data.get('skills_entered', ''),
            readiness_score=int(data.get('readiness_score', 0)),
        )
        return JsonResponse({'status': 'ok'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@login_required(login_url='login')
def history(request):
    searches = SearchHistory.objects.filter(user=request.user)
    return render(request, 'history.html', {'searches': searches})


@login_required(login_url='login')
def progress(request):
    searches = SearchHistory.objects.filter(user=request.user)

    # Chart data — last 10 entries in chronological order
    chart_data = list(
        searches.order_by('searched_at')
        .values('career_goal', 'readiness_score', 'searched_at')[:10]
    )
    for entry in chart_data:
        entry['searched_at'] = entry['searched_at'].strftime('%d %b')

    # Best score per career
    from django.db.models import Max
    best_scores = (
        searches.values('career_goal')
        .annotate(best=Max('readiness_score'))
        .order_by('-best')
    )

    def get_level(score):
        if score >= 80:
            return 'Advanced'
        elif score >= 50:
            return 'Intermediate'
        return 'Beginner'

    career_levels = [
        {
            'career': b['career_goal'],
            'best': b['best'],
            'level': get_level(b['best']),
        }
        for b in best_scores
    ]

    return render(request, 'progress.html', {
        'chart_data': json.dumps(chart_data),
        'career_levels': career_levels,
        'total_searches': searches.count(),
        'best_overall': searches.order_by('-readiness_score').first(),
    })


def logout_view(request):
    logout(request)
    return redirect('login')
