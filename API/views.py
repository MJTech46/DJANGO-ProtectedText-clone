from django.shortcuts import render

from rest_framework import viewsets
from Text.models import Page, Tab
from Text.serializers import PageSerializer, TabSerializer

class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    lookup_field = 'url'

class TabViewSet(viewsets.ModelViewSet):
    queryset = Tab.objects.all()
    serializer_class = TabSerializer
