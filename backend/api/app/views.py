from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.app.serializers import UserSerializer, GroupSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    permission_classes = [IsAuthenticated]

    queryset = Group.objects.all()
    serializer_class = GroupSerializer

'''
class AuthToken():
    for user in User.objects.all():
        Token.objects.get_or_create(user=user)
'''