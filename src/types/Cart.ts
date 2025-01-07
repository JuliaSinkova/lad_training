import { Product } from "./Product";

export enum CartActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  CLEAR = "CLEAR",
  REMOVE = "REMOVE",
  FAVORITE = "FAVORITE",
}
export type CartAction =
  | {
      type: CartActionType.INCREMENT;
      payload: Product;
    }
  | {
      type: CartActionType.DECREMENT;
      payload: Product;
    }
  | {
      type: CartActionType.REMOVE;
      payload: Product;
    }
  | {
      type: CartActionType.CLEAR;
    }
  | {
      type: CartActionType.FAVORITE;
      payload: Product;
    };
