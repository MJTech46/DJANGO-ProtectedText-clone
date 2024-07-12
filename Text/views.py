from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from .utils import url_safe_string
from .models import Page

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
        # checking if url exist in the DB
        if Page.objects.filter(url=url).exists():
            init_modal_state = "exist"
        else:
            init_modal_state = "new"

        #passing all necessary variables to the html page
        context = {
            "title" : url,
            "init_modal_state" : init_modal_state,
            }
        return render(request, "Text/main.html", context)
    