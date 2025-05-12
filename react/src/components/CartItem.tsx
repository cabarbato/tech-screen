import type { Product } from "../context/models";

const CartItem = ({ item }: {item: Product}) => <div className="cart-item my-8">
	<h2>{item.title}</h2>
	<p>${item.price}</p>
	<p>Quantity: {item.quantity}</p>
	</div>
	
export default CartItem;