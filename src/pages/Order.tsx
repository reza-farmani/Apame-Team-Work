import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../server/services/api';
import ProductSelector from '../features/service/ProductSelector';
import QuantityPrice from '../features/service/QuantityPrice';
import AttributesForm from '../features/service/AttributesForm';
import OrderSummary from '../features/service/OrderSummary';
import { Product } from '../types/Product'; 

type OrderFormValues = {
  productId: string;
  variant?: string;
  quantity: number;
};

function Order() {
  const { control, watch, handleSubmit } = useForm<OrderFormValues>();
  const { data: products } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const selectedProductId = watch('productId');
  const selectedVariant = watch('variant');

  const selectedProduct = products?.find(p => p.id === Number(selectedProductId));

  const onSubmit = (data: OrderFormValues) => {
    console.log('سفارش ثبت شد:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <ProductSelector 
          products={products || []} 
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
              attributes={selectedProduct.productAttributes || []} 
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