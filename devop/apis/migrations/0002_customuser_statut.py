# Generated by Django 5.1.6 on 2025-02-13 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='statut',
            field=models.BooleanField(default=False),
        ),
    ]
