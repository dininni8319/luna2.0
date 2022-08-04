from rest_framework import serializers
from .models import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Restaurant
        #those fields are take strait out of are model
        fields = (
          'id', 
          'name', 
          'category', 
          'country', 
          'city', 
          'street',
          'zip', 
          'website', 
          'phone', 
          'email', 
          'open_hours',
          'price_level',
          'image',
          'description',
        )