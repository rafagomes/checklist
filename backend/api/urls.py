from django.urls import include, path
from rest_framework import routers
from djoser.urls import authtoken
from django.conf import settings
from  django.conf.urls.static import static

from api.app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'fabricants', views.FabricantViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/v1/auth/', include(authtoken)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)