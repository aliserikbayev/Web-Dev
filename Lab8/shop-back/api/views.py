from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'rating': product.rating,
        'image': product.image,
        'link': product.link,
        'likes': product.likes,
        'isFavorite': False,
        'categoryId': product.category.id,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        }
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


@require_http_methods(['GET'])
def product_list(request):
    products = Product.objects.select_related('category').all()

    category_id = request.GET.get('category')   
    active = request.GET.get('active')
    search = request.GET.get('search')

    if category_id:
        products = products.filter(category_id=category_id)

    if active is not None:
        if active == 'true':
            products = products.filter(is_active=True)
        elif active == 'false':
            products = products.filter(is_active=False)

    if search:
        products = products.filter(name__icontains=search)

    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


@require_http_methods(['GET'])
def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    return JsonResponse(product_to_dict(product))


@require_http_methods(['GET'])
def category_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


@require_http_methods(['GET'])
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    return JsonResponse(category_to_dict(category))


@require_http_methods(['GET'])
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    products = Product.objects.select_related('category').filter(category=category)
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)
