# Generated by Django 5.1.4 on 2025-02-15 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_event_category_event_finish_address_event_gender_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='team_member_fullname',
            field=models.CharField(default=1, max_length=250),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='team_member_pic',
            field=models.ImageField(default=1, upload_to='team_member'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='team_member_position',
            field=models.CharField(default=1, max_length=250),
            preserve_default=False,
        ),
    ]
