from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.status import HTTP_200_OK
from rest_framework.permissions import AllowAny

from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password

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

    permission_classes = {AllowAny}

    def get(self, request):
        email = request.GET['email']
        profile_data = User.objects.get(email=email)
        serialized_data = serializers.UserSerializer(profile_data)
        data = serialized_data.data
        return Response(data)

    def post(self, request):
        email = request.user.email

        username = request.data.get('username', False)
        old_password = request.data.get('old_password', False)
        new_password = request.data.get('new_password', False)
        about_me = request.data.get('about_me', False)

        user = User.objects.get(email=email)
        if not user:
            return Response(0)

        if username:
            user.username = username

        if old_password:
            if check_password(old_password, user.password):
                user.set_password(new_password)

        if about_me:
            user.profile.about_me = about_me
            user.profile.save()

        user.save()

        return Response(1)


class Story(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        story_id = request.GET.get('id', False)
        if story_id:
            stories = models.Story.objects.get(id=story_id)
            data = serializers.StorySerializer(stories)
            data = data.data
            return Response(data)
        return Response(0)


class StoryTitles(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        index = 0
        search = request.GET.get('search', False)
        all = request.GET.get('all', False)
        if search:
            stories = models.Story.objects.filter(title__icontains=search)[index:index + 30]
            data = serializers.StoryTitleSerializer(stories, many=True)
            data = data.data
        if all:
            stories = models.Story.objects.filter()[index:index + 30]
            data = serializers.StoryTitleSerializer(stories, many=True)
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
