import type { CartAction, CartState } from "./models";

const cartReducer = (state: CartState, action: CartAction) => {
    return { cart: action.payload };
};

export { cartReducer }