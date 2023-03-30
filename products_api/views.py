from rest_framework import viewsets, status, filters
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Q
from products.models import Product
from .serializers import ProductSerializer


class ProductList(viewsets.ViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    def custom_filter(self, queryset):
        search_param = self.request.query_params.get('search', None)
        if search_param:
            queryset = queryset.filter(Q(name__icontains=search_param))
        return queryset

    def list(self, request):
        queryset = self.custom_filter(self.queryset)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(self.queryset)
        return Response(serializer.data)

    def retrieve(self, request, **kwargs):
        item = self.kwargs.get('pk')
        product = get_object_or_404(self.queryset, slug=item)
        serializer = self.serializer_class(product)
        return Response(serializer.data)

    def update(self, request, pk=None):
        product = get_object_or_404(self.queryset, pk=pk)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def destroy(self, request, pk=None):
        product = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(product)
        return Response(serializer.data)
