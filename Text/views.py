from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from .utils import url_safe_string

# Create your views here.
def home(request: HttpRequest) -> HttpResponse:
    if request.method == "GET":
        return render(request, "Text/index.html")
    
    if request.method == "POST":
        #dynamic part of the URL
        search_input=request.POST.get("search-input")
        #redirect url creation
        redirect_url = f"/{url_safe_string(search_input)}"
        return redirect(redirect_url)

def page(request: HttpRequest, url: str) -> HttpResponse:
    if request.method == "GET":
        print(url)
        return render(request, "Text/main.html")
    