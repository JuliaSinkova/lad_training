import { useState } from "react";
import classes from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Button/Button";
import { Product } from "@/types/Product";
import ChangeCount from "../ChangeCount/ChangeCount";

type ProductProps = {
  product: Product;
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onFavorite: (product: Product) => void;
};

const ProductCard = ({
  product,
  onIncrement,
  onDecrement,
  onFavorite,
}: ProductProps) => {
  return (
    <div className={classes.productCard}>
      <div className={classes.header}>
        <div className={classes.rating}>
          <FontAwesomeIcon icon={faStar} style={{ color: "#ff9935" }} />
          <p>{product.rating}</p>
        </div>
        <div className={classes.favorite} onClick={() => onFavorite(product)}>
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
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ) : (
          <Button onClick={() => onIncrement(product)}>Купить</Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
