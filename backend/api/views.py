from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Category,SubCategory,Product
from .serializers import CategorySerializer,SubCategorySerializer,ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class Idividuacat(viewsets.ViewSet):
    def retrieve(self, request,pk=None):
        queryset = SubCategory.objects.filter(category=pk)
        serializer = SubCategorySerializer(queryset, many=True)
        return Response(serializer.data)
        
    
