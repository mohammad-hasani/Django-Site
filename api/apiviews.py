from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from . import models
from . import serializers


class Story(APIView):
    def get(self, request):
        stories = models.Story.objects.all()[:10]
        data = serializers.StorySerializer(stories, many=True)
        data = data.data

        return Response(data)


# class UserCreate(generics.CreateAPIView):
#     authentication_classes = ()
#     permission_classes = ()
#     serializer_class = serializers.UserSerializer
#
#
# class LoginView(APIView):
#     permission_classes = ()
#
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         user = authenticate(username=username, password=password)
#         if user:
#             return Response({'token': user.auth_token.key})
#         else:
#             return Response('Error')
