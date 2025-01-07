import { Product } from "@/types/Product";
import classes from "./ChangeCount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { CartContext } from "@/context/CartContext/CartContext";
import { decrementCart, incrementCart } from "@/actions";

type ChangeCountProps = {
  product: Product;
};

const ChangeCount = ({ product }: ChangeCountProps) => {
  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={classes.block}>
      <button
        onClick={() => dispatch(decrementCart(product))}
        className={classes.btn}
      >
        <FontAwesomeIcon
          icon={faMinus}
          style={{ color: theme === "light" ? "black" : "white" }}
        />
      </button>
      {product.count} шт.
      <button
        onClick={() => dispatch(incrementCart(product))}
        className={classes.btn}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: theme === "light" ? "black" : "white" }}
        />
      </button>
    </div>
  );
};

export default ChangeCount;
