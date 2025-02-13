from django.shortcuts import render
from .models import CustomUser,Task
from rest_framework.generics import ListCreateAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
from .serializers import CustomUserSerialisers,TaskSerializers
from rest_framework.permissions import IsAuthenticated , AllowAny, IsAdminUser
# Create your views here.
class CreateUserCustom(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerialisers
    permission_classes =[AllowAny]


class DestroyUserView(DestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerialisers
    permission_classes = [IsAuthenticated ,IsAdminUser]
class CreateListTask(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializers
    permission_classes=[IsAuthenticated]
    
    
    def get_queryset(self):
        return Task.objects.filter(author=self.request.user)
    
    def perform_create(self, serializer):
        if serializer.is_valid() :
            serializer.save(author=self.request.user)
        else:
            raise ValueError("mauvais donnee envoyer a l'utilisateur")
class DeleteTaskView(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializers
    permission_classes=[IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(author=user)

class UpdateTaskViews(UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class=TaskSerializers
    permission_classes=[IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(author=user)