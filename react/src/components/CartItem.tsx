import type { Product } from "../context/models";

const CartItem = ({ item }: { item: Product }) => (
  <tr className="cart-item my-6">
    <td>{item.title}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td>
      <button className="button">Remove One</button>
    </td>
  </tr>
);

export default CartItem;
