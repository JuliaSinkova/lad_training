import { initialState } from "@/initialState";
import { CartAction } from "@/types/Cart";
import { Product } from "@/types/Product";
import { createContext } from "react";

type CartContextType = {
    state: Array<Product>;
    dispatch: React.Dispatch<CartAction>;
  };

  export const CartContext = createContext<CartContextType>({
    state: initialState,
    dispatch: () => {}
  });