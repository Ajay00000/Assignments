
from rest_framework import viewsets
from app.models import *
from django.contrib.auth.models import User
from .serializers import EmployeeSerializer,ManagerSerializer
from rest_framework.generics import ListAPIView
class EmployeeViewset(viewsets.ModelViewSet):

	serializer_class = EmployeeSerializer
	queryset = employee.objects.all()


# from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
# from app.models import *
# from rest_framework import viewsets
# from .serializers import EmployeeSerializer

# class EmployeeListView(ListAPIView):
# 	queryset = employee.objects.all()
# 	serializer_class = EmployeeSerializer

# class EmployeeCreateView(CreateAPIView):
# 	queryset = employee.objects.all()
# 	serializer_class = EmployeeSerializer

# class EmployeeDetailView(RetrieveAPIView):
# 	queryset = employee.objects.all()
# 	serializer_class = EmployeeSerializer

# class EmployeeDeleteView(DestroyAPIView):
# 	queryset = employee.objects.all()
# 	serializer_class = EmployeeSerializer

# class EmployeeUpdateView(UpdateAPIView):
# 	queryset = employee.objects.all()
# 	serializer_class = EmployeeSerializer


