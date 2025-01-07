// import { initialState } from "./ininialState";
// import { CounterAction, CounterActionType, CounterType } from "./types";
import { ImmerReducer } from "use-immer";

import { CartAction, CartActionType } from "./types/Cart";
import { Product } from "./types/Product";

export const cartReducer: ImmerReducer<Array<Product>, CartAction> = (
  draftState,
  action
) => {
  switch (action.type) {
    case CartActionType.INCREMENT: {
      return draftState.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: (action.payload.count || 0) + 1 }
          : item
      );
    }
    case CartActionType.DECREMENT: {
      return draftState.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: (action.payload.count || 0) - 1 }
          : item
      );
    }
    case CartActionType.CLEAR: {
      return draftState.map((item) => ({ ...item, count: 0 }));
    }
    case CartActionType.REMOVE: {
      return draftState.map((item) =>
        item.id === action.payload.id ? { ...item, count: 0 } : item
      );
    }
    case CartActionType.FAVORITE: {
      return draftState.map((item) =>
        item.id === action.payload.id
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      );
    }
  }
};
