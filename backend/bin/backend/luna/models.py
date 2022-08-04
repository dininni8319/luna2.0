
from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    street = models.CharField(max_length=200)
    zip = models.CharField(max_length=100)
    website = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    open_hours = models.CharField(max_length=200)
    price_level = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    description = models.TextField(max_length=500)

    def __str__(self):
        return 'Restaurant name is {} and the phone number is {}'.format(self.name, self.phone)