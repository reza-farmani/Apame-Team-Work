 function OrderSummary({ watch, product }) {
  const formValues = watch();
  const selectedPrice = product?.productPrice?.find(
    p => p.quantity === Number(formValues.quantity)
  )?.price;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">خلاصه سفارش</h3>
      
      {product && (
        <>
          <div className="flex justify-between">
            <span>محصول:</span>
            <span>{product.productName}</span>
          </div>
          
          {formValues.variant && (
            <div className="flex justify-between">
              <span>{formValues.variant}</span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span>تعداد:</span>
            <span>{formValues.quantity || 0} عدد</span>
          </div>
          
          {selectedPrice && (
            <div className="flex justify-between font-bold">
              <span>مبلغ کل:</span>
              <span>{selectedPrice.toLocaleString()} تومان</span>
            </div>
          )}
        </>
      )}
      
      <button 
        type="submit" 
        className="w-full bg-green-500 text-white py-2 rounded"
      >
        ثبت نهایی سفارش
      </button>
    </div>
  );
}

export default OrderSummary;