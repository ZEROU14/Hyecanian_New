# Generated by Django 5.1.4 on 2025-04-10 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0022_alter_eventsignup_phone_number_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='start_time',
            field=models.TimeField(default="00:00:00"),
            preserve_default=False,
        ),
    ]
