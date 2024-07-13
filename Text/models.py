from django.db import models

# Create your models here.
class Page(models.Model):
    url = models.CharField(max_length=255, null=False, unique=True)
    #password = models.CharField(max_length=128, null=False) #passwords are handled my the js on client side

    def __str__(self) -> str:
        return self.url

class Tab(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name="tabs")
    text = models.TextField()

    def __str__(self) -> str:
        return f'text.id={self.pk}'