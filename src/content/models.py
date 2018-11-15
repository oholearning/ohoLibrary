from django.db import models
from core.models import TimeStampedModel

class ContentParser:
    """
    Content parser class to parse the content type like (audio, video book and so on)
    """
    pass 

class ContentType(models.Model):
    """
    Audio, video, book, animation, exam and so on
    """
    pass 

class Level(models.Model):
    """
    Content belongs to primary, secondary and so on
    """
    pass 


class ContentDeveloper(models.Model):
    """
    Organization or institution which develop this content. 
    """
    pass 

class Content(TimeStampedModel):
    """
    Actual content type
    """ 
    pass 