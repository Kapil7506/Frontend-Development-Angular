# Generated by Django 5.1.3 on 2024-12-02 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("file", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="Mobile_no",
            field=models.CharField(max_length=15),
        ),
    ]