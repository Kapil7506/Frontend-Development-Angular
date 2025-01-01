from django.db import models
from file.models import Profile

# Create your models here.

class Employeeprofile(models.Model):
    empId = models.AutoField(primary_key=True)
    empName = models.CharField(max_length=15, null=True)
    empCode = models.CharField(max_length=15, null=True)
    empEmailId = models.CharField(max_length=255, null=True)
    empDesignation = models.CharField(max_length=15, null=True)
    role = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.empName

class ProjectTask(models.Model):
    ClientProjectId = models.AutoField(primary_key=True)
    projectName = models.CharField(max_length=255, null=True) 
    startDate = models.DateField()
    ExceptedEnddate = models.DateField()
    leadByEmpId = models.ForeignKey(Employeeprofile, related_name='lead', on_delete=models.CASCADE)
    # completedDate = models.DateField(null = True)
    contactPerson = models.CharField(max_length=255, null=True)
    contactPersonPhoneno = models.CharField(max_length=255, null=True)
    totalEmpWorking = models.CharField(max_length=255, null=True)
    projectCost = models.IntegerField()
    projectDetails = models.CharField(max_length=255, null=True)
    contactPersonEmailId = models.CharField(max_length=255, null=True)
    clientId = models.ForeignKey(Profile, related_name='client', on_delete=models.CASCADE)

    def __str__(self):
        return self.projectName