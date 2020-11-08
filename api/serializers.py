from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

from . import models


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['about_me']


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['username', 'profile']


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Story
        fields = '__all__'


class StoryTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Story
        fields = ['id', 'title']