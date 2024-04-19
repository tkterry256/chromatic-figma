export interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  discountedFrom?: number;
  amountInCart: number;
  productImage: string;
}
