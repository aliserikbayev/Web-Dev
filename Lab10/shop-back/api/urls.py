from django.urls import path
from api.views.fbv import products_list, product_detail, active_products, expensive_products
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
    ActiveProductListAPIView,
    ExpensiveProductListAPIView,
)

urlpatterns = [
    # Level 5 - Generics (active)
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/active/', ActiveProductListAPIView.as_view(), name='product-active'),
    path('products/expensive/', ExpensiveProductListAPIView.as_view(), name='product-expensive'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),

    # Level 2 - FBV
    path('fbv/products/', products_list, name='fbv-product-list'),
    path('fbv/products/<int:product_id>/', product_detail, name='fbv-product-detail'),
    path('fbv/products/active/', active_products, name='fbv-product-active'),
    path('fbv/products/expensive/', expensive_products, name='fbv-product-expensive'),
]
