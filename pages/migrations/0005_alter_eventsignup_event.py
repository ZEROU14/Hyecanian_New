# Generated by Django 5.1.4 on 2025-01-09 11:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0004_eventsignup_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventsignup',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='pages.event'),
        ),
    ]
