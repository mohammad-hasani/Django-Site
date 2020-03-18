from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

from . import models


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Story
        fields = '__all__'

