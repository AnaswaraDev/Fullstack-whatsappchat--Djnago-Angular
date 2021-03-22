from rest_framework import serializers
from django.contrib.auth.models import User
from . models import messages
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# change password
from rest_framework import serializers
from django.contrib.auth.models import User


class ChangePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = messages
        fields = ('id','message','sent','recieve','time')


class MessageSerializerA(serializers.ModelSerializer):
    class Meta:
        model = messages
        fields = ('id','message','sent','recieve')