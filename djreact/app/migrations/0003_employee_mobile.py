# Generated by Django 3.0.7 on 2020-06-14 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_delete_manager'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='mobile',
            field=models.IntegerField(default=22),
            preserve_default=False,
        ),
    ]
