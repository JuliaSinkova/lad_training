import { Product } from "@/types/Product";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Cart.module.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import ChangeCount from "../ChangeCount/ChangeCount";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

type CartProps = {
  cartItems: Product[];
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onRemove: (product: Product) => void;
  onClear: () => void;
  onFavorite: (product: Product) => void;
};

const Cart = ({
  cartItems,
  onIncrement,
  onDecrement,
  onClear,
  onRemove,
  onFavorite,
}: CartProps) => {
  const calculateTotalPrice = (): string => {
    return cartItems
      .reduce(
        (total, item) => total + item.price * (item.count ? item.count : 0),
        0
      )
      .toFixed(2);
  };
  const calculateItemPrice = (product: Product): string => {
    if( product.count && product.count  > 0 ){
      return (product.count * product.price).toFixed(2)
     }
     else {
      return product.price.toFixed(2);
     }
  };

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
                    <ChangeCount
                      product={item}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                    />
                    <div>{calculateItemPrice(item)} ₽</div>
                    <button
                      onClick={() => onFavorite(item)}
                      className={classes.favorite}
                    >
                      {item.isFavorite ? (
                        <FontAwesomeIcon
                          icon={faHeartSolid}
                          style={{ color: "red" }}
                        />
                      ) : (
                        <FontAwesomeIcon icon={faHeartRegular} />
                      )}
                    </button>
                    <button
                      className={classes.remove}
                      onClick={() => onRemove(item)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div>Всего: {calculateTotalPrice()} ₽</div>
          <button className={classes.clear} onClick={() => onClear()}>
            <FontAwesomeIcon icon={faCartShopping} /> Очистить корзину
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
