from django.contrib import admin
from . import models

# Extra code here below makes me nervous 
@admin.register(models.Product)
class ProducerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'active', 'category', 'producer')
    prepopulated_fields = {'slug': ('name',), }


admin.site.register(models.Category)