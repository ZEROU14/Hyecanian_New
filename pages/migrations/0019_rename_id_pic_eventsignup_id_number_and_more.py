# Generated by Django 5.1.4 on 2025-04-06 13:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0018_eventsignup_t_shirt_size'),
    ]

    operations = [
        migrations.RenameField(
            model_name='eventsignup',
            old_name='id_pic',
            new_name='id_number',
        ),
        migrations.RemoveField(
            model_name='eventsignup',
            name='incurace_pic',
        ),
    ]
