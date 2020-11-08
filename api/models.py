from djongo import models

from django.contrib.auth.models import User

User._meta.get_field('username')._unique = False
User._meta.get_field('email')._unique = True


class Phone(models.Model):
    phone = models.CharField(max_length=25)

    class Meta:
        abstract = True

    def __str__(self):
        return self.phone


class Email(models.Model):
    email = models.EmailField()

    class Meta:
        abstract = True

    def __str__(self):
        return self.email


class StringField(models.Model):
    string = models.CharField(max_length=255)

    class Meta:
        abstract = True

    def __str__(self):
        return self.string


class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    body = models.TextField()
    address = models.CharField(max_length=255)
    phone = models.ArrayField(model_container=Phone)
    email = models.ArrayField(model_container=Email)

    class Meta:
        db_table = 'contact'

    def __str__(self):
        return str(self.id)


class Message(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=3)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=25)
    message = models.TextField()

    class Meta:
        db_table = 'message'

    def __str__(self):
        return str(self.name)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')
    about_me = models.TextField(default='')

    class Meta:
        db_table = 'profile'


class Story(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    publisher = models.CharField(max_length=100, null=True, blank=True)
    writer = models.CharField(max_length=100, null=True, blank=True)
    lang = models.CharField(max_length=10, null=True, blank=True)
    search = models.CharField(max_length=20, null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True)
    publication_date = models.DateField(null=True, blank=True)
    added_date = models.DateField(null=True, blank=True)
    topics = models.ArrayField(model_container=StringField)
    content = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'story'
