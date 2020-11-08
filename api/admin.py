from django.contrib import admin
from . import models
from django.contrib.auth.models import User


class ProfileInline(admin.TabularInline):
    model = models.Profile


class ExtendUser(admin.ModelAdmin):
    inlines = [ProfileInline]
    class Meta:
        model = User        


admin.site.unregister(User)
admin.site.register(User, ExtendUser)

admin.site.register(models.Contact)
admin.site.register(models.Message)

admin.site.register(models.Story)
