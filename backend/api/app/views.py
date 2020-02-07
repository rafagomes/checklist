from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.app.models import Fabricant
from api.app.serializers import UserSerializer, GroupSerializer, FabricantSerialize
from rest_framework.authtoken.models import Token

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class FabricantViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows fabricants to be viewed or edited.
    """
    queryset = Fabricant.objects.all()
    serializer_class = FabricantSerialize