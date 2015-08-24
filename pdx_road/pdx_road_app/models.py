from django.db import models

# Create your models here.
class Submission(models.Model):
    firstName = models.CharField(max_length = 200)
    lastName = models.CharField(max_length = 200)
    emailAddress = models.CharField(max_length = 200)
    category = models.CharField(max_length = 200)
    otherCategoryExplain = models.TextField()
    caption = models.CharField(max_length = 200)
    geoLocation = models.CharField(max_length = 200)
    photo = models.ImageField(upload_to='../uploads')
    link = models.CharField(max_length = 200)

    def __str__(self):
        return self.geoLocation