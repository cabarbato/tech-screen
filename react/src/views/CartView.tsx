import React from "react";
import { StateContext } from "../context/context";
import CartItem from "../components/CartItem";
import type { Cart } from "../context/models";

const CartView = () => {
  const context = React.useContext(StateContext);
  const cart: Cart = context?.cart || { 
    id: 0, 
    products: [], 
    total: 0, 
    discountedTotal: 0, 
    userId: 0, 
    totalProducts: 0, 
    totalQuantity: 0 
  };

  return (
    <>
        {cart.products && cart.products.length > 0 ? (
        cart.products.map((item) => <CartItem item={item} key={item.id} />)
        ) : null}
      <h3>Total: {cart.total}</h3>
    </>
  );
};

export default CartView;
