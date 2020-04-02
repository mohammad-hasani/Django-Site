from django.urls import path
from . import apiviews

urlpatterns = [
    # path('story/titles', apiviews.Story.as_view()),
    path('story/detail', apiviews.Story.as_view()),
    path('contactinfo', apiviews.Contact.as_view()),
    path('profile', apiviews.Profile.as_view()),
    path('login', apiviews.Login.as_view()),
    path('register', apiviews.Register.as_view()),
    path('logout', apiviews.Logout.as_view())
]
