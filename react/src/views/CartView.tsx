import React from "react";
import { StateContext } from "../context/context";
import CartItem from "../components/CartItem";
import type { Cart } from "../context/models";

const CartView = () => {
  const context = React.useContext(StateContext);
  const cart: Cart = context?.cart || { products: [] };

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
