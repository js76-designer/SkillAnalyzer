from django.db import models
from django.contrib.auth.models import User


class collection(models.Model):
    collection_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.collection_name


class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Career(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, default="")
    skills = models.ManyToManyField(Skill)

    def __str__(self):
        return self.name


class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='searches')
    career_goal = models.CharField(max_length=100)
    skills_entered = models.TextField()          # comma-separated
    readiness_score = models.IntegerField()      # 0-100
    searched_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-searched_at']

    def __str__(self):
        return f"{self.user.username} – {self.career_goal} ({self.readiness_score}%)"