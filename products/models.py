from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length = 100)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Product(models.Model):

    # Nesting model manager within model makes me nervous
    class ProductObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(active=True)
        
    name = models.CharField(max_length=250)
    description = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='available')
    produced = models.DateTimeField(default=timezone.now)
    active = models.BooleanField(default=False)    
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    producer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='creations')
    
    objects = models.Manager()
    productobjects = ProductObjects()

    class Meta:
        ordering = ('-produced',)
    
    def __str__(self):
        return self.title 