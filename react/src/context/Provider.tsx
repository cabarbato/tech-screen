import React from "react";
import { cartReducer } from "./reducers";
import type { Cart, CartState, ProviderProps } from "./models";
import { StateContext, DispatchContext } from "./context";

const initialCart: Cart = {
    id: 1,
    products: [
      {
        id: 168,
        title: 'Charger SXT RWD',
        price: 32999.99,
        quantity: 3,
        total: 98999.97,
        discountPercentage: 13.39,
        discountedTotal: 85743.87,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png',
      },
      {
        id: 78,
        title: 'Apple MacBook Pro 14 Inch Space Grey',
        price: 1999.99,
        quantity: 2,
        total: 3999.98,
        discountPercentage: 18.52,
        discountedTotal: 3259.18,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png',
      },
      {
        id: 183,
        title: 'Green Oval Earring',
        price: 24.99,
        quantity: 5,
        total: 124.95,
        discountPercentage: 6.28,
        discountedTotal: 117.1,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png',
      },
      {
        id: 100,
        title: 'Apple Airpods',
        price: 129.99,
        quantity: 5,
        total: 649.95,
        discountPercentage: 12.84,
        discountedTotal: 566.5,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png',
      },
    ],
    total: 103774.85,
    discountedTotal: 89686.65,
    userId: 33,
    totalProducts: 4,
    totalQuantity: 15,
  };

function Provider({ children }: Readonly<ProviderProps>) {
  const [cart, onSetCart] = React.useReducer(cartReducer, {
    cart: initialCart,
  } as CartState);

  return (
    <StateContext.Provider value={cart}>
      <DispatchContext.Provider value={onSetCart}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Provider;