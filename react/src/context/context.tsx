import { createContext, type Dispatch } from "react";
import type { CartAction, CartState } from "./models";

// Update the StateContext to use the new shape
export const StateContext = createContext<CartState | null>(null);
export const DispatchContext = createContext<Dispatch<CartAction> | null>(null);