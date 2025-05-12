import React, { type ReactNode } from "react";
import { cartReducer } from "./reducers";
import type { CartState } from "./models";
import { StateContext, DispatchContext } from "./context";

interface ProviderProps {
  children: ReactNode;
}

const initialCart = {

}

function Provider({ children }: Readonly<ProviderProps>) {
  const [cart, onSetCart] = React.useReducer<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.Reducer<CartState, any>
  >(cartReducer, {
    cart: initialCart,
  });

  return (
    <StateContext.Provider value={cart}>
      <DispatchContext.Provider value={onSetCart}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Provider;