from django.db import models
from django.utils.translation import ugettext_lazy as _

class AbstractTimeStampModel(models.Model):
    """TimeStampModel that holds created_date and updated_date field"""
   
    created_date = models.DateTimeField(_("Created date"), auto_now_add=True)
    updated_date = models.DateTimeField(_("Updated date"), auto_now=True)

    def __str__(self):
        return self.created_date

    class Meta:
        abstract = True