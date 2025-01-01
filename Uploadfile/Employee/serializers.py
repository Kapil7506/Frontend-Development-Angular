from rest_framework import serializers
from .models import Employeeprofile, ProjectTask

class ProjectTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTask
        fields = ['ClientProjectId', 'projectName', 'startDate', 'ExceptedEnddate', 'leadByEmpId', 'contactPerson','contactPersonPhoneno','totalEmpWorking','projectCost','projectDetails','contactPersonEmailId','clientId']

class Employeeprofileserializer(serializers.ModelSerializer):
    lead = ProjectTaskSerializer(many=True, read_only=True)
    class Meta:
        model = Employeeprofile
        fields = ['empId', 'empName', 'empCode', 'empEmailId', 'empDesignation', 'role', 'lead']