import { cartReducer } from "@/reducer";
import { CartContext } from "./CartContext";
import { initialState } from "@/initialState";
import { useImmerReducer } from "use-immer";

type CartProviderProps = {
    children: React.ReactNode
}

const CartProvider = ({children}: CartProviderProps) => {
    const [state, dispatch] = useImmerReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
  )
}

export default CartProvider