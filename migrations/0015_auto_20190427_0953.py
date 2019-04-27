# Generated by Django 2.2 on 2019-04-27 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('draftcardposter', '0014_settings_draft_year'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='settings',
            name='imguralbum',
        ),
        migrations.AddField(
            model_name='settings',
            name='imgur_album_template',
            field=models.CharField(default='imgur_album', max_length=200),
        ),
    ]
