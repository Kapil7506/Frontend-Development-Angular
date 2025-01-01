from rest_framework import serializers
from .models import Profile
from Employee.serializers import ProjectTaskSerializer

class Profileserializer(serializers.ModelSerializer):
    client = ProjectTaskSerializer(many=True, read_only=True)
    class Meta:
        model = Profile
        fields = ['id', 'name', 'email', 'address', 'mobile_no', 'client']

# class Employeeprofileserializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Employeeprofile
#         fields = ['empId', 'empName', 'empCode', 'empEmailId', 'empDesignation', 'role']
        
