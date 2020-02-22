from rest_framework.authtoken import views as rest_views

from django.urls import path
from . import views
from . import apiviews

urlpatterns = [
    path('', views.index),
    path('api/story/', apiviews.Story.as_view()),
    path('users/', apiviews.UserCreate.as_view()),
    path('login/', apiviews.LoginView.as_view()),
    path("login2/", rest_views.obtain_auth_token, name="login"),
]
