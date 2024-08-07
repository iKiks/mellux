from django.contrib import admin
from .models import Product, Category, Order, OrderItem, Address, Payment, Coupon

# Register your models here.
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Address)
admin.site.register(Payment)
admin.site.register(Coupon)