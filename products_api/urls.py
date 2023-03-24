from .views import ProductList
from rest_framework.routers import DefaultRouter

app_name = 'blog_api'

router = DefaultRouter()
router.register('', ProductList, basename='product')
urlpatterns = router.urls