from django.urls import path
from . import apiviews

urlpatterns = [
    # path('story/titles', apiviews.Story.as_view()),
    path('story/detail', apiviews.Story.as_view()),
]
