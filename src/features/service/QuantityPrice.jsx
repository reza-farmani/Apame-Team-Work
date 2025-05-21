import { Controller } from 'react-hook-form';

function QuantityPrice({ product, variant, control }) {
  const prices = variant 
    ? product.productVariants.find(v => v.variant === variant)?.prices
    : product.productPrice;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">تعداد و قیمت</h3>
      
      <Controller
        name="quantity"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select 
            {...field} 
            className="w-full p-3 border rounded"
          >
            <option value="">تعداد را انتخاب کنید</option>
            {prices?.map((price, idx) => (
              <option key={idx} value={price.quantity}>
                {price.quantity} عدد - {price.price.toLocaleString()} تومان
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}

export default QuantityPrice;