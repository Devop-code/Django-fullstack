from django.shortcuts import render
from .models import CustomUser
from rest_framework.generics import ListCreateAPIView,CreateAPIView
from .serializers import CustomUserSerialisers
from rest_framework.permissions import IsAuthenticated , AllowAny, IsAdminUser
# Create your views here.
class CreateUserCustom(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerialisers
    permission_classes =[AllowAny]
    
    
