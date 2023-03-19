from django.test import TestCase
from django.contrib.auth.models import User
from products.models import Product, Category


class Test_Create_Product(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='django')
        test_user = User.objects.create_user(
            username='test_user_1', password='123456789')
        test_product = Product.objects.create(
            category_id=1, producer_id=1, name='Product Title', description='Product description', slug='product-slug', active=True)


    def test_product_content(self):
        product = Product.objects.get(id=1)
        cat = Category.objects.get(id=1)

        producer = f'{product.producer}'
        name = f'{product.name}'
        description = f'{product.description}'
        slug = f'{product.slug}'

        self.assertEqual(producer, 'test_user_1')
        self.assertEqual(name, 'Product Title')
        self.assertEqual(description, 'Product description')
        self.assertEqual(slug, 'product-slug')
        self.assertEqual(str(product), 'Product Title')
        self.assertEqual(str(cat), 'django') 