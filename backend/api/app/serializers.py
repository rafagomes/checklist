from django.contrib.auth.models import User, Group
from api.app.models import Fabricant
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class FabricantSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Fabricant
        fields = ['id', 'fabricant_name', 'fabricant_logo']