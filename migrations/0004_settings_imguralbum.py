# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-26 21:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('draftcardposter', '0003_auto_20170426_1631'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='imguralbum',
            field=models.CharField(default='test', max_length=100),
            preserve_default=False,
        ),
    ]
