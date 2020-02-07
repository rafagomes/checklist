from django.db import models

# Create your models here.
class Fabricant(models.Model):
    fabricant_name = models.CharField(max_length=120)
    fabricant_logo = models.ImageField(upload_to='fabricants-logos')

class AirplaneModel(models.Model):
    airplane_model_name = models.CharField(max_length=120)
    fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE)

