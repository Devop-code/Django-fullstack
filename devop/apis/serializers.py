from rest_framework import serializers
from .models import CustomUser,Task

class CustomUserSerialisers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields =['id','username','email','password']
        extra_kwargs = {'password':{'write_only': True}}
        
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id','title','description','created_at','statut','author']
        extra_kwargs = {'author':{'read_only': True}}
        
   