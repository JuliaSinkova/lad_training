import { useContext, useState } from "react";
import classes from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Button/Button";
import { Product } from "@/types/Product";
import ChangeCount from "../ChangeCount/ChangeCount";
import clsx from "clsx";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { addFavorite, incrementCart } from "@/actions";
import { CartContext } from "@/context/CartContext/CartContext";

type ProductProps = {
  product: Product;
};

const ProductCard = ({
  product,
}: ProductProps) => {
  const {theme} = useContext(ThemeContext);
  const {state, dispatch} = useContext(CartContext);
  return (
    <div className={clsx(classes.productCard, classes[`productCard__${theme}`])}>
      <div className={classes.header}>
        <div className={classes.rating}>
          <FontAwesomeIcon icon={faStar} style={{ color: "#ff9935" }} />
          <p>{product.rating}</p>
        </div>
        <div className={classes.favorite} onClick={() => dispatch(addFavorite(product))}>
          {product.isFavorite ? (
            <FontAwesomeIcon icon={faHeartSolid} style={{ color: "red" }} />
          ) : (
            <FontAwesomeIcon icon={faHeartRegular} />
          )}
        </div>
      </div>
      <div className={classes.product_image}>
        <img src={product.imageUrl} alt="product_image"></img>
      </div>
      <h3>{product.name}</h3>
      <div className={classes.price}>
        <div className={classes.price_new}>{product.price} ₽</div>
        <div className={classes.discount}>-{product.discount}%</div>
      </div>
      <div className={classes.buy}>
        {product.count && product.count > 0 ? (
          <ChangeCount
            product={product}
          />
        ) : (
          <Button onClick={() => dispatch(incrementCart(product))}>Купить</Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
