from django.db import models

# Create your models here.
class Page(models.Model):
    url = models.CharField(max_length=255, null=False, unique=True)
    password = models.CharField(max_length=128, null=False) #use make_password() to convert to 128 char hash

class Tab(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name="tabs")
    text = models.TextField()