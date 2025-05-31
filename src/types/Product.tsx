export interface ProductVariant {
  variant: string;
  price: number;
}

export interface ProductAttribute {
  id: number;
  name: string;
  type: 'text' | 'number' | 'select';
  options?: string[];
  required: boolean;
}

export interface Product {
  id: number;
  productName: string;
  productCode: string;
  productVariants?: ProductVariant[];
  productAttributes?: ProductAttribute[];
  basePrice: number;
}