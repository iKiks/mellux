from django.urls import path
from . import views

urlpatterns = [
        # Product URLs
    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('products/create/', views.ProductCreateView.as_view(), name='product-create'),
    path('products/<int:pk>/update/', views.ProductUpdateView.as_view(), name='product-update'),
    path('products/<int:pk>/delete/', views.ProductDeleteView.as_view(), name='product-delete'),

    # Category URLs
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CategoryDetailView.as_view(), name='category-detail'),
    path('categories/create/', views.CategoryCreateView.as_view(), name='category-create'),
    path('categories/<int:pk>/update/', views.CategoryUpdateView.as_view(), name='category-update'),
    path('categories/<int:pk>/delete/', views.CategoryDeleteView.as_view(), name='category-delete'),

    # Order URLs
    path('orders/', views.OrderListView.as_view(), name='order-list'),
    path('orders/<int:pk>/', views.OrderDetailView.as_view(), name='order-detail'),
    path('orders/create/', views.OrderCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/update/', views.OrderUpdateView.as_view(), name='order-update'),
    path('orders/<int:pk>/delete/', views.OrderDeleteView.as_view(), name='order-delete'),

    # Address URLs
    path('addresses/', views.AddressListView.as_view(), name='address-list'),
    path('addresses/<int:pk>/', views.AddressDetailView.as_view(), name='address-detail'),
    path('addresses/create/', views.AddressCreateView.as_view(), name='address-create'),
    path('addresses/<int:pk>/update/', views.AddressUpdateView.as_view(), name='address-update'),
    path('addresses/<int:pk>/delete/', views.AddressDeleteView.as_view(), name='address-delete'),

    # Payment URLs
    path('payments/', views.PaymentListView.as_view(), name='payment-list'),
    path('payments/<int:pk>/', views.PaymentDetailView.as_view(), name='payment-detail'),

    # Coupon URLs
    path('coupons/', views.CouponListView.as_view(), name='coupon-list'),
    path('coupons/create/', views.CouponCreateView.as_view(), name='coupon-create'),
    path('coupons/<int:pk>/update/', views.CouponUpdateView.as_view(), name='coupon-update'),
    path('coupons/<int:pk>/delete/', views.CouponDeleteView.as_view(), name='coupon-delete'),
]
