import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../server/services/api';
import ProductSelector from '../features/service/ProductSelector';
import QuantityPrice from '../features/service/QuantityPrice';
import AttributesForm from '../features/service/AttributesForm';
import OrderSummary from '../features/service/OrderSummary';



 function Order() {
  const { control, watch, handleSubmit } = useForm();
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const selectedProductId = watch('productId');
  const selectedVariant = watch('variant');

  const selectedProduct = products?.find(p => p.id === Number(selectedProductId));

  const onSubmit = (data) => {
    console.log('سفارش ثبت شد:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <ProductSelector
          products={products} 
          control={control} 
        />
        
        {selectedProduct && (
          <>
            <QuantityPrice
              product={selectedProduct} 
              variant={selectedVariant} 
              control={control} 
            />
            
            <AttributesForm
              attributes={selectedProduct.productAttributes} 
              control={control} 
            />
          </>
        )}
      </div>

      <div className="border p-4 rounded-lg sticky top-4">
        <OrderSummary 
          watch={watch} 
          product={selectedProduct} 
        />
      </div>
    </form>
  );
}

export default Order;

/*{
  "products": [
    {
      "id": 1,
      "productName": "بگ کرافت خام",
      "productImage": "351-1.jpg",
      "productCode": "bag-010",
      "productPrice": [
        {
          "quantity": 50,
          "price": 320000
        }
      ],
      "productAttributes": {
        "width": 17,
        "depth": 7,
        "height": 25
      }
    },
    {
      "id": 2,
      "productName": "بگ گلاسه سفید",
      "productImage": "352-1.jpg",
      "productCode": "bag-013",
      "productPrice": [
        {
          "quantity": 50,
          "price": 790000
        }
      ],
      "productAttributes": {
        "width": 24,
        "depth": 10,
        "height": 36
      }
    },
    {
      "id": 3,
      "productName": "بیلبورد یک طرفه",
      "productImage": "بلیبورد یک طرفه.jpg",
      "productCode": "billboard-001",
      "productDescription": "برای اطلاع از نحوه رزرو و نصب تماس بگیرید!"
    },
    {
      "id": 4,
      "productName": "جعبه شیرینی یک تیکه کرافت",
      "productImage": "جعبه شیرینی یک تیکه کرافت.png",
      "productAttributes": [
        {
          "name": "width",
          "value": 20
        },
        {
          "name": "depth",
          "value": 7
        },
        {
          "name": "height",
          "value": 15
        }
      ],
      "productPrice": [
        {
          "quantity": 10,
          "price": 15900
        },
        {
          "quantity": 100,
          "price": 16900
        }
      ],
      "productDescription": "مناسب حدود 750 گرم شیرینی خشک /با پنجره و بدون پنجره"
    },
    {
      "id": 5,
      "productName": "بروشور 2 لت 80 گرم تا شده",
      "productCode": "brochure-001",
      "productImage": "10081.png",
      "productAttributes": [
        {
          "name": "material",
          "value": "تحریر"
        },
        {
          "name": "weight",
          "value": 80
        },
        {
          "name": "lat",
          "value": 2
        }
      ],
      "productVariants": [
        {
          "variant": "A5",
          "prices": [
            {
              "quantity": 1000,
              "price": 2200000
            }
          ]
        }
      ]
    }
  ]
}*/