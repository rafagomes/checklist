# Generated by Django 3.0.3 on 2020-02-07 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fabricant',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
