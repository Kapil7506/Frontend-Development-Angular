# Generated by Django 5.1.3 on 2024-12-18 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("file", "0003_rename_mobile_no_profile_mobile_no_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="profile",
            name="profile_photo",
        ),
        migrations.AddField(
            model_name="profile",
            name="address",
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name="profile",
            name="email",
            field=models.CharField(max_length=15, null=True),
        ),
    ]