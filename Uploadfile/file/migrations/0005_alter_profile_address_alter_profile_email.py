# Generated by Django 5.1.3 on 2024-12-18 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("file", "0004_remove_profile_profile_photo_profile_address_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="address",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="email",
            field=models.CharField(max_length=255, null=True),
        ),
    ]