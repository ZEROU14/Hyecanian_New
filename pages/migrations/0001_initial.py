# Generated by Django 5.1.4 on 2025-01-22 10:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(blank=True, max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('event_data', models.DateField(auto_now=True)),
                ('title_picture', models.ImageField(upload_to='event')),
                ('seconde_picture', models.ImageField(upload_to='event')),
                ('location', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('up_comming_competition', 'up_comming_competition'), ('in_progress_competition', 'in_progress_competition'), ('closed_competition', 'closed_competition')], default='up_comming_competition', max_length=25)),
                ('gender', models.CharField(choices=[('m', 'male'), ('f', 'female'), ('all', 'all genders')], max_length=3)),
                ('start_address', models.CharField(max_length=500)),
                ('finish_address', models.CharField(max_length=500)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='category', to='pages.category')),
                ('other_tags', models.ManyToManyField(related_name='event', to='pages.tags')),
                ('road_profile_tag', models.ManyToManyField(related_name='road', to='pages.tags')),
                ('road_surface', models.ManyToManyField(related_name='surface', to='pages.tags')),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=225)),
                ('price', models.IntegerField()),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='tickets', to='pages.event')),
            ],
        ),
        migrations.CreateModel(
            name='EventSignup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('age', models.DateField()),
                ('singup_date', models.DateTimeField(auto_now_add=True)),
                ('phone_number', models.IntegerField()),
                ('gender', models.CharField(choices=[('m', 'male'), ('f', 'female')], max_length=1)),
                ('incurace_pic', models.ImageField(upload_to='event_signup_incurance')),
                ('id_pic', models.ImageField(upload_to='event_signup_id_pic')),
                ('state', models.CharField(max_length=255)),
                ('relativ_name', models.CharField(max_length=255)),
                ('relativ_last_name', models.CharField(max_length=255)),
                ('relativ_phone_number', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='event_signups', to=settings.AUTH_USER_MODEL)),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='pages.ticket')),
            ],
        ),
    ]
