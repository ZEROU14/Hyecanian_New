# Generated by Django 5.1.4 on 2025-01-10 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_alter_eventsignup_event'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_data',
            field=models.DateField(blank=True, null=True),
        ),
    ]
