# Generated by Django 5.1.4 on 2025-04-10 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0025_remove_event_start_time_alter_event_event_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticket',
            name='distanc',
        ),
    ]
