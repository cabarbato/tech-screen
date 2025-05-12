import type { CartAction, CartState } from "./models";

export const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
	  case "UPDATE_CART":
		return { ...state, cart: action.payload };
	  default:
		return state;
	}
  };
