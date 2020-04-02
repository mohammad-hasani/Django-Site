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
        fields = '__all__'


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Story
        fields = '__all__'

