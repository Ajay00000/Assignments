from django.db import models



class employee(models.Model):         # Creating Model or Table in database
	firstname = models.CharField(max_length=50)
	lastname = models.CharField(max_length=50)
	address = models.CharField(max_length=50)
	dob = models.DateField()
	city = models.CharField(max_length=50)
	mobile =models.IntegerField()

	def __str__(self):

		return self.firstname

	

