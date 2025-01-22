from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

# Create your models here.
class Blogs(models.Model):
    BLOGS_STATUS_APPROVED = 'A'
    BLOGS_STATUS_UNAPPROVED = 'UP'
    BLOGS_STATUS = [
        (BLOGS_STATUS_APPROVED,'Approved'),
        (BLOGS_STATUS_UNAPPROVED,'UnApproved'),
    ] 
    title = models.CharField(max_length=255)
    description = models.TextField()
    title_picture = models.ImageField(upload_to='blogs_title')
    seconde_picture = models.ImageField(upload_to='seconde_blogs_pic')
    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_modified = models.DateTimeField(auto_now=True)
    cateogry = models.ForeignKey(Category,on_delete=models.DO_NOTHING)
    status = models.CharField(max_length=2,choices=BLOGS_STATUS,default=BLOGS_STATUS_UNAPPROVED)
    
    
    