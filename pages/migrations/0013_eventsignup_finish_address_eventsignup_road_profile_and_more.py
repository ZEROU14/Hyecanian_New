# Generated by Django 5.1.4 on 2025-01-19 06:56

import taggit.managers
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0012_remove_event_evtry_price'),
        ('taggit', '0006_rename_taggeditem_content_type_object_id_taggit_tagg_content_8fc721_idx'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventsignup',
            name='finish_address',
            field=models.CharField(default=1, max_length=500),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='eventsignup',
            name='road_profile',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
        migrations.AddField(
            model_name='eventsignup',
            name='start_address',
            field=models.CharField(default=1, max_length=500),
            preserve_default=False,
        ),
    ]
