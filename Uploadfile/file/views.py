from rest_framework import generics, viewsets
from django.http import HttpResponse
from .serializers import Profileserializer
from .models import Profile

# Create your views here.
class Createprofile(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = Profileserializer

    # def post(self, request, *args, **kwargs):
    #     name = request.data('name')
    #     profile_photo = request.data['profile_photo']
    #     mobile_no = request.data['mobile_no']
    #     Profile.objects.Create(mobile_no=mobile_no, profile_photo=profile_photo, name=name)
    #     return HttpResponse({'message': 'File Uploaded'}, status=200)

#get profile
class getprofile(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = Profileserializer

class getprofile(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = Profileserializer

# class CreateEmpprofile(viewsets.ModelViewSet):
#     queryset = Employeeprofileserializer.objects.all()
#     serializer_class = Employeeprofileserializer

# class getprofile(generics.RetrieveNewAPIView):
#     queryset = Employeeprofileserializer.objects.all()
#     serializer_class = Employeeprofileserializer

