from django.urls import path, include
from luna.views import RestauranListView

urlpatterns = [
    path('', RestauranListView.as_view()),
    path('new/', RestauranListView.as_view()),
]