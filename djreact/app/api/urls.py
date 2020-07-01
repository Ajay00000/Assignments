
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('',EmployeeViewset,base_name='user')
urlpatterns = router.urls



# from django.urls import path

# from .views import *

# """
# 	Here define the api url to visit or do specific action
# """

# urlpatterns = [
# 	path('',EmployeeListView.as_view()),
# 	path('create/',EmployeeCreateView.as_view()),
# 	path('<pk>/',EmployeeDetailView.as_view()),
# 	path('<pk>/update/',EmployeeUpdateView.as_view()),
# 	path('<pk>/delete/',EmployeeDeleteView.as_view()),


	
# ]