import { CartAction, CartActionType } from "./types/Cart";
import { Product } from "./types/Product";

export const incrementCart = (value: Product): CartAction => ({
  type: CartActionType.INCREMENT,
  payload: value,
});

export const decrementCart = (value: Product): CartAction => ({
  type: CartActionType.DECREMENT,
  payload: value,
});

export const removeCart = (value: Product): CartAction => ({
  type: CartActionType.REMOVE,
  payload: value,
});

export const clearCart = (): CartAction => ({
  type: CartActionType.CLEAR,
});
export const addFavorite = (value: Product): CartAction => ({
    type: CartActionType.FAVORITE,
    payload: value,
  });
