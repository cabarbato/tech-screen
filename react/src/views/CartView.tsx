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
    totalQuantity: 0,
  };

  return (
    <div className="content is-medium">
      <table className="table is-striped is-hoverable">
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {cart.products && cart.products.length > 0
            ? cart.products.map((item) => (
                <CartItem item={item} key={item.id} />
              ))
            : null}
        </tbody>
      </table>
      <h4>Total Items: {}</h4>
      <h4>Total: {cart.total}</h4>
      <h4>Discounted Total: {cart.discountedTotal}</h4>
      <div className="buttons">
        <button className="button is-danger">Clear Cart</button>
        <button className="button is-success">Checkout</button>
      </div>
    </div>
  );
};

export default CartView;
