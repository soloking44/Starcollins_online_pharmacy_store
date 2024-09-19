from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.

class Category(models.Model):
    cat_name = models.CharField(max_length=100, blank=True, null=True)
    cat_price = models.CharField(max_length=100, blank=True, null=True)
    
    def __str__(self):
      return self.cat_name 
    
    
class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True,null=True,related_name='category')
    name = models.CharField(max_length=100,blank=True, null=True)
    image = models.ImageField(upload_to='imange', blank=True, null=True)
      
    def __str__(self):
      return self.name

    
class Product(models.Model):
    def uploadsfile(instance,filename):
        return f'images/{instance.companyname}/{filename}'
    email = models.EmailField(unique=True,blank=True, null=True)   
    title = models.CharField(max_length=200, blank=True, null=True)
    subcategory = models.ForeignKey(SubCategory,on_delete=models.CASCADE, related_name='product',blank=True,null=True)
    companyname = models.CharField(max_length=100)
    decription = models.CharField(max_length=100,blank=True, null=True)
    price = models.CharField(max_length=30, blank=True, null=True)
    imagefile = models.ImageField(upload_to=uploadsfile, max_length=None)
    
    def __str__(self):
        return f"{self.title} in {self.companyname}"