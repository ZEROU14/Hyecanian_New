# Generated by Django 5.1.4 on 2025-02-03 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_customuser_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='phone_number',
        ),
    ]
