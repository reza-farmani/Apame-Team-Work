import { Controller, useWatch, Control } from 'react-hook-form';
import { Product } from '../../types/Product';

interface ProductSelectorProps {
  products: Product[];
  control: Control<any>;
}

function ProductSelector({ products, control }: ProductSelectorProps) {
  const selectedProductId = useWatch({
    control,
    name: 'productId'
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">انتخاب محصول</h3>
      
      <Controller
        name="productId"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select 
            {...field} 
            className="w-full p-3 border rounded"
          >
            <option value="">محصول را انتخاب کنید</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.productName} ({product.productCode})
              </option>
            ))}
          </select>
        )}
      />

      <Controller
        name="variant"
        control={control}
        render={({ field }) => {
          const product = products.find(p => p.id === Number(selectedProductId));
          return product?.productVariants ? (
            <select 
              {...field} 
              className="w-full p-3 border rounded"
            >
              <option value="">واریانت را انتخاب کنید (اختیاری)</option>
              {product.productVariants.map(variant => (
                <option key={variant.variant} value={variant.variant}>
                  {variant.variant}
                </option>
              ))}
            </select>
          ) : null;
        }}
      />
    </div>
  );
}

export default ProductSelector;