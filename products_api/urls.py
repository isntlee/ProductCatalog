from .views import ProductList
from django.urls import path

app_name = 'blog_api'

urlpatterns = [
    path('', ProductList.as_view({'get': 'list', 'post': 'create'})),
    path('<slug:pk>/', ProductList.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('search/', ProductList.as_view({'get': 'retrieve'})),

    # Error-checking these urls at the min
    # path('bread/create', ProductList.as_view({'post': 'create'})),
    # path('bread/product/<slug:pk>/', ProductList.as_view({'get': 'retrieve'})),
    # path('bread/edit/<slug:pk>/', ProductList.as_view({'put': 'update',})),
    # # Could be a problem with edit not presenting the page properly, but get create to work first
    # path('bread/delete/<slug:pk>/', ProductList.as_view({'delete': 'destroy'})),
]