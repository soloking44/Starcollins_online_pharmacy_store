# Generated by Django 5.1.1 on 2024-09-15 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_product_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=5, max_digits=5, max_length=100),
        ),
    ]
