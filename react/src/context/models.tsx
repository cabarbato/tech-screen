import type { ReactNode } from "react";

export interface Product {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedTotal: number;
	thumbnail: string;
  }
  
export interface Cart {
	id: number;
	products: Product[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}

export interface ProviderProps {
	children: ReactNode;
  }
  
  
export interface CartState {
    cart: Cart;
}

export interface CartAction {
    type: string;
    payload: Cart;
}