from django.urls import path,include
from .views import CreateListTask , DeleteTaskView , UpdateTaskViews
urlpatterns = [
    
    path('task/',CreateListTask.as_view(),name="create_task"),
    path('task/delete/<int:pk>/',DeleteTaskView.as_view(),name="delete_task"),
    path('task/update/<int:pk>/',UpdateTaskViews.as_view(),name="update_task"),
]
