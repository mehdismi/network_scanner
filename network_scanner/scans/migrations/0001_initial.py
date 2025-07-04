# Generated by Django 5.2 on 2025-05-16 08:57
# pylint: skip-file

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
            name='Scan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('target', models.CharField(max_length=255)),
                ('scan_type', models.CharField(choices=[('host_discovery', 'Host Discovery'), ('open_ports', 'Open Ports'), ('os_services', 'OS, Services, and Version Detection')], max_length=50)),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('running', 'Running'), ('completed', 'Completed'), ('failed', 'Failed')], default='pending', max_length=20)),
                ('result', models.JSONField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('progress', models.IntegerField(default=0)),
                ('pid', models.IntegerField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scans', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
