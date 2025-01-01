from django.urls import path, include
#from rest_framework import routers
from .views import Createprofile, getprofile

# router = routers.DefaultRouter()
# router.register(r'profile', CreateEmpprofile)
urlpatterns = [
    path('profiles/', Createprofile.as_view(), name='profile'),
    path('profile/<int:pk>', getprofile.as_view(), name='profile'),
    #path('Emp/', CreateEmpprofile.as_view(), name='Emp')
    # path('', include(router.urls)), 
]