from rest_framework import generics, viewsets
from django.http import HttpResponse
from .serializers import Employeeprofileserializer, ProjectTaskSerializer
from .models import Employeeprofile, ProjectTask
# Create your views here.

class Createprofile(generics.ListCreateAPIView):
    queryset = Employeeprofile.objects.all()
    serializer_class = Employeeprofileserializer

class getprofile(generics.RetrieveAPIView):
    queryset = Employeeprofile.objects.all()
    serializer_class = Employeeprofileserializer

class getprofile(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employeeprofile.objects.all()
    serializer_class = Employeeprofileserializer

class ItemsViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectTaskSerializer
    queryset = ProjectTask.objects.all() 


