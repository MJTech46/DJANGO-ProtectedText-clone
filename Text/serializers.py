from rest_framework import serializers
from .models import Tab, Page

class TabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tab
        fields = [
            'id',
            'text'
        ]

class PageSerializer(serializers.ModelSerializer):
    tabs = TabSerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = [
            'url', 
            'tabs',
        ]
