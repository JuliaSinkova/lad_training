import { useState } from "react";
import classes from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Button/Button";

const Product = () => {
  const Product = {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    discount: 90,
    rating: 4.7,
    isFavorite: false,
  };
  const [isFavorite, setIsFavorite] = useState(Product.isFavorite);
  const handleFavorite = () => {
    setIsFavorite((prev: boolean) => !prev);
  };
  return (
    <div className={classes.productCard}>
        <div className={classes.header}>
      <div className={classes.rating}>
      <FontAwesomeIcon icon={faStar} style={{color:"#ff9935"}} />
        <p>{Product.rating}</p>
      </div>
      <div className={classes.favorite} onClick={handleFavorite}>
        {isFavorite ? (
          <FontAwesomeIcon icon={faHeartSolid} style={{color:"red"}}/>
        ) : (
          <FontAwesomeIcon icon={faHeartRegular} />
        )}
      </div>
      </div>
      <div className={classes.product_image}>
        <img src={Product.imageUrl} alt="product_image"></img>
      </div>
      <h3>{Product.name}</h3>
      <div className={classes.price}>
      <div className={classes.price_new}>{Product.price} ₽</div>
      <div className={classes.price_old}>{}</div>
      <div className={classes.discount}>-{Product.discount}%</div>
      </div>
      <Button label="Купить"></Button>
    </div>
  );
};

export default Product;
