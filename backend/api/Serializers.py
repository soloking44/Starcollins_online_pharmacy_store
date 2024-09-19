from rest_framework import serializers
from .models import Category, SubCategory,Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
                           

class SubCategorySerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True, many=True)
    class Meta:
        model = SubCategory
        fields = '__all__'
        
class CategorySerializer(serializers.ModelSerializer):
    category = SubCategorySerializer(read_only=True,many=True) 
      
    class Meta:
        model = Category
        fields = '__all__'