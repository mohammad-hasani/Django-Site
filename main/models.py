from django.db import models

# Create your models here.


class Story(models.Model):
    name = models.TextField()
    story = models.TextField()

    def __str__(self):
        return self.name
