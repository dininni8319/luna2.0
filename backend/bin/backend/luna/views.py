from rest_framework import status
from luna.serializers import RestaurantSerializer
from rest_framework.views import APIView
from .models import Restaurant
from rest_framework.response import Response

# Create your views here.
class RestauranListView(APIView):
    serializer_class = RestaurantSerializer

    def get(self, request, *args,**kwargs):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)

        return Response(serializer.data)

    def post(self, request, *args,**kwargs):
        serializer = RestaurantSerializer(data=request.data)
        
        if serializer.is_valid():
          serializer.save()
         
          return Response(serializer.data, status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
