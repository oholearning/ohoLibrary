from django.db import models
from core.models import AbstractTimeStampModel

CONTENT_FORMAT = (
    ('pdf', 'pdf'),
    ('html', 'html')
)


class ContentParser:
    """
    Content parser class to parse the content type like (audio, video book and so on)
    """
    class Meta:
        abstract = True

class ContentType(models.Model):
    """
    Audio, video, book, animation, exam and so on
    """
    content_type = models.CharField(max_length=255)

    def __str__(self):
        return self.content_type 

class Level(models.Model):
    """
    Content belongs to primary, secondary and so on
    """
    level_name = models.CharField(max_length=255)

    def __str__(self):
        return self.level_name


class ContentDeveloper(models.Model):
    """
    Organization or institution which develop this content. 
    """
    content_developer = models.CharField(max_length=255)
    content_developer_url = models.URLField()
    content_developer_description = models.TextField()

    def __str__(self):
        return self.content_developer

class Content(AbstractTimeStampModel):
    """
    Actual content type
    """ 
    content_title = models.CharField(max_length=255)
    content_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
    content_level = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True)
    content_developer = models.ForeignKey(ContentDeveloper, on_delete=models.SET_NULL, null=True)
    content_format = models.CharField(max_length=5, choices=CONTENT_FORMAT, null=True) 
    content = models.FileField(upload_to="content")

    def __str__(self):
        return self.content_title
