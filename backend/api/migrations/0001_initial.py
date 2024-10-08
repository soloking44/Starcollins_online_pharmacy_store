# Generated by Django 5.1.1 on 2024-09-15 12:50

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companyname', models.CharField(max_length=100)),
                ('decription', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5, max_length=100)),
                ('imagefile', models.ImageField(upload_to=api.models.Product.uploadsfile)),
            ],
        ),
    ]
