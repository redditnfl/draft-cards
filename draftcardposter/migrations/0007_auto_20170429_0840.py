# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-29 12:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('draftcardposter', '0006_settings_live_thread_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='settings',
            name='live_thread_id',
            field=models.CharField(blank=True, max_length=60),
        ),
    ]
