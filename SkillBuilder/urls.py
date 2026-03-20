from . import views
from django.urls import path

urlpatterns = [
    path('',             views.home,        name='home'),
    path('login/',       views.login_view,  name='login'),
    path('logout/',      views.logout_view, name='logout'),
    path('save-search/', views.save_search, name='save_search'),
    path('history/',     views.history,     name='history'),
    path('progress/',    views.progress,    name='progress'),
]
