import { Controller } from 'react-hook-form';

 function ProductSelector({ products, control }) {
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
            {products?.map(product => (
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
        render={({ field }) => (
          products?.find(p => p.id === Number(field.value?.productId))?.productVariants && (
            <select 
              {...field} 
              className="w-full p-3 border rounded"
            >
              <option value="">واریانت را انتخاب کنید (اختیاری)</option>
              {products
                .find(p => p.id === Number(field.value?.productId))
                ?.productVariants?.map(variant => (
                  <option key={variant.variant} value={variant.variant}>
                    {variant.variant}
                  </option>
                ))}
            </select>
          )
        )}
      />
    </div>
  );
}

export default ProductSelector;