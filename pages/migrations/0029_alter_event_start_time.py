# Generated by Django 5.1.4 on 2025-04-10 07:37

import pages.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0028_alter_event_start_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='start_time',
            field=models.TimeField(default="00:00:00"),
        ),
    ]
