# Generated by Django 5.1.4 on 2025-01-16 15:39

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
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('evtry_price', models.PositiveIntegerField()),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('event_data', models.DateField(auto_now=True)),
                ('title_picture', models.ImageField(upload_to='event')),
                ('seconde_picture', models.ImageField(upload_to='event')),
                ('location', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('up_comming_competition', 'up_comming_competition'), ('in_progress_competition', 'in_progress_competition'), ('closed_competition', 'closed_competition')], default='up_comming_competition', max_length=25)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='category', to='pages.category')),
            ],
        ),
        migrations.CreateModel(
            name='EventSignup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.DateField()),
                ('phone_number', models.IntegerField()),
                ('gender', models.CharField(choices=[('m', 'male'), ('f', 'female')], max_length=1)),
                ('incurace_pic', models.ImageField(upload_to='event_signup_incurance')),
                ('id_pic', models.ImageField(upload_to='event_signup_id_pic')),
                ('state', models.CharField(max_length=255)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='pages.event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
