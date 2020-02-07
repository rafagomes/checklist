from django.db import models

# Create your models here.

class Fabricant(models.Model):
    id = models.AutoField(primary_key=True)
    fabricant_name = models.CharField(max_length=120)
    fabricant_logo = models.ImageField(upload_to='fabricants-logos')
    
    objects = models.Manager()
    
'''
class AirplaneModel(models.Model):
    airplane_model_name = models.CharField(max_length=120)
    fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE)

class Checklist(models.Model):
'''