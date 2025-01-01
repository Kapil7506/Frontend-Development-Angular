from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Createprofile, getprofile, ItemsViewSet

router = DefaultRouter()
router.register(r'project',ItemsViewSet)

urlpatterns = [
    path('Emp/', Createprofile.as_view(), name='Emps'),
    path('Emp/<int:pk>', getprofile.as_view(), name='Emps'),
    path('', include(router.urls)),
]