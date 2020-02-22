from django.shortcuts import render
from django.http import JsonResponse
import json

# Create your views here.


def index(request):
    return render(request, 'index.html')


def api_test(request):
    test = dict()
    test['name'] = 'Sina'
    return JsonResponse(test)