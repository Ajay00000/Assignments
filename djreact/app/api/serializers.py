from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import employee


class ManagerSerializer(serializers.ModelSerializer):
	dob = serializers.DateField()
	address = serializers.CharField(max_length=50)
	company = serializers.CharField(max_length=50)

	class Meta:
		model = User
		fields = ('id','first_name','last_name','password','email','dob','address','company')

class EmployeeSerializer(serializers.ModelSerializer):

	class Meta:
		model = employee
		fields = ('id','firstname','lastname','address','dob','city','mobile')
