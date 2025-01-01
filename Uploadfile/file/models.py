from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
def upload_path(instance, filename):
    return '/'.join(['profile_photo', str(instance.Mobile_no), filename])

class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=15, blank=False)
    email = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    mobile_no = models.CharField(max_length=15)

    def __str__(self):
        return self.name
    
# class Employeeprofile(models.Model):
#     empId = models.AutoField(primary_key=True)
#     empName = models.CharField(max_length=15, null=True)
#     empCode = models.CharField(max_length=15, null=True)
#     empEmailId = models.CharField(max_length=255, null=True)
#     empDesignation = models.CharField(max_length=15, null=True)
#     role = models.CharField(max_length=255, null=True)

#     def __str__(self):
#         return self.empName