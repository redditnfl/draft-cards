# Generated by Django 2.2 on 2020-04-29 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('draftcardposter', '0015_auto_20190427_0953'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='image_host',
            field=models.CharField(choices=[('IMGUR', 'imgur'), ('REDDIT', 'i.redd.it')], default='imgur', max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='player',
            name='position',
            field=models.CharField(choices=[('QB', 'Quarterback'), ('WR', 'Wide Receiver'), ('CB', 'Cornerback'), ('K', 'Kicker'), ('P', 'Punter'), ('LS', 'Long Snapper'), ('DE', 'Defensive End'), ('ILB', 'Inside Linebacker'), ('DT', 'Defensive Tackle'), ('RB', 'Running back'), ('OT', 'Offensive Tackle'), ('OG', 'Offensive Guard'), ('TE', 'Tight end'), ('S', 'Safety'), ('LB', 'Linebacker'), ('C', 'Center'), ('FB', 'Fullback'), ('DB', 'Defensive Back'), ('OLB', 'Outside Linebacker'), ('OL', 'Offensive Lineman'), ('SS', 'Strong Safety'), ('DL', 'Defensive Lineman'), ('NT', 'Nose Tackle'), ('FS', 'Free Safety'), ('BL', 'Bandleader'), ('4-3 DT', '4-3 Defensive Tackle'), ('4-3 DE', '4-3 Defensive End'), ('4-3 MLB', '4-3 Middle Linebacker'), ('4-3 OLB', '4-3 Outside Linebacker'), ('3-4 DT', '3-4 Defensive Tackle'), ('3-4 DE', '3-4 Defensive End'), ('3-4 ILB', '3-4 Inside Linebacker'), ('3-4 OLB', '3-4 Outside Linebacker')], max_length=3),
        ),
        migrations.AlterField(
            model_name='priority',
            name='position',
            field=models.CharField(choices=[('QB', 'Quarterback'), ('WR', 'Wide Receiver'), ('CB', 'Cornerback'), ('K', 'Kicker'), ('P', 'Punter'), ('LS', 'Long Snapper'), ('DE', 'Defensive End'), ('ILB', 'Inside Linebacker'), ('DT', 'Defensive Tackle'), ('RB', 'Running back'), ('OT', 'Offensive Tackle'), ('OG', 'Offensive Guard'), ('TE', 'Tight end'), ('S', 'Safety'), ('LB', 'Linebacker'), ('C', 'Center'), ('FB', 'Fullback'), ('DB', 'Defensive Back'), ('OLB', 'Outside Linebacker'), ('OL', 'Offensive Lineman'), ('SS', 'Strong Safety'), ('DL', 'Defensive Lineman'), ('NT', 'Nose Tackle'), ('FS', 'Free Safety'), ('BL', 'Bandleader'), ('4-3 DT', '4-3 Defensive Tackle'), ('4-3 DE', '4-3 Defensive End'), ('4-3 MLB', '4-3 Middle Linebacker'), ('4-3 OLB', '4-3 Outside Linebacker'), ('3-4 DT', '3-4 Defensive Tackle'), ('3-4 DE', '3-4 Defensive End'), ('3-4 ILB', '3-4 Inside Linebacker'), ('3-4 OLB', '3-4 Outside Linebacker')], max_length=3),
        ),
    ]
