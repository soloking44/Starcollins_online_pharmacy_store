
from rest_framework import routers
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet,CategoryView,ProductView,Idividuacat

router = routers.SimpleRouter()

router.register('categories', CategoryViewSet, basename='categories')
router.register('category', CategoryView, basename='category')
router.register('product', ProductView, basename='product')
router.register('idividuacat', Idividuacat, basename='idividuacat')
urlpatterns = [
    path('', include(router.urls)),
]