import { Product } from "@/types/Product";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Cart.module.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import ChangeCount from "../ChangeCount/ChangeCount";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { addFavorite, clearCart, removeCart } from "@/actions";
import { CartContext } from "@/context/CartContext/CartContext";

type CartProps = {
  cartItems: Product[];
};

const Cart = ({ cartItems }: CartProps) => {
  const calculateTotalPrice = (): string => {
    return cartItems
      .reduce(
        (total, item) => total + item.price * (item.count ? item.count : 0),
        0
      )
      .toFixed(2);
  };
  const calculateItemPrice = (product: Product): string => {
    if (product.count && product.count > 0) {
      return (product.count * product.price).toFixed(2);
    } else {
      return product.price.toFixed(2);
    }
  };

  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <div>
        <h2>
          <FontAwesomeIcon icon={faCartShopping} /> Ваш заказ:
        </h2>
      </div>
      {cartItems.length === 0 ? (
        <div>Здесь пока ничего нет</div>
      ) : (
        <>
          <ol>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className={classes.cartItem}>
                  {item.name}
                  <div className={classes.controls}>
                    <ChangeCount product={item} />
                    <div>{calculateItemPrice(item)} ₽</div>
                    <button
                      onClick={() => dispatch(addFavorite(item))}
                      className={classes.favorite}
                    >
                      {item.isFavorite ? (
                        <FontAwesomeIcon
                          icon={faHeartSolid}
                          style={{ color: "red" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeartRegular}
                          style={{
                            color: theme === "light" ? "black" : "white",
                          }}
                        />
                      )}
                    </button>
                    <button
                      className={classes.remove}
                      onClick={() => {
                        dispatch(removeCart(item));
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: theme === "light" ? "black" : "white" }}
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div>Всего: {calculateTotalPrice()} ₽</div>
          <button
            className={classes.clear}
            onClick={() => dispatch(clearCart())}
          >
            <FontAwesomeIcon icon={faCartShopping} /> Очистить корзину
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
