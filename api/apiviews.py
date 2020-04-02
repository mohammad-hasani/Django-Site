from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.status import HTTP_200_OK
from rest_framework.permissions import AllowAny

from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User

from . import models
from . import serializers


class Login(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip()
        password = request.data.get('password', '').strip()

        user = authenticate(request, username=email, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=HTTP_200_OK)
        else:
            return Response(0)


class Register(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username', '').strip()
        email = request.data.get('email', '').strip()
        password1 = request.data.get('password1', '').strip()
        password2 = request.data.get('password2', '').strip()

        if password1 != password2:
            return Response(0)

        user = User(username=username, email=email)
        user.set_password(password1)
        user.is_staff = True
        user.save()

        user = authenticate(request, username=email, password=password1)
        if user:
            # token, _ = Token.objects.get_or_create(user=user)
            # return Response({'token': token.key}, status=HTTP_200_OK)
            # login(request, user)
            return Response(1, status=HTTP_200_OK)
        else:
            return Response(0)


class Logout(APIView):
    def get(self, request):
        request.user.auth_token.delete()
        return Response(1, status=HTTP_200_OK)


class Contact(APIView):
    def get(self, request):
        contact_data = models.Contact.objects.first()
        serialized_data = serializers.ContactSerializer(contact_data)
        data = serialized_data.data
        return Response(data)

    def post(self, request):
        data = request.data
        data['type'] = 'M'
        try:
            message_model = models.Message(**data)
            message_model.save()
            return Response(1)
        except:
            return Response(0)


class Profile(APIView):
    def get(self, request):
        # email = request.data.email
        # profile_data = models.Profile.objects.first({'email': email})
        # serialized_data = serializers.ProfileSerializer(profile_data)
        # data = serialized_data.data
        # return Response(data)

        return Response('ok')

    def post(self, request):
        return Response('ok')


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
