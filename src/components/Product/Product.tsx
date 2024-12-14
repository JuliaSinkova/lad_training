import { FC, useState } from "react";
import classes from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Button/Button";
import { Product } from "@/types/Product";
import ChangeCount from "./components/ChangeCount";

type ProductProps = {
  product : Product
}

const ProductCard = ({product} : ProductProps) => {

  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [count, setCount] = useState<number>(0);
  const handleFavorite = () => {
    setIsFavorite((prev: boolean) => !prev);
  };
  const handleAddCard = () => {
    setCount(prev => prev + 1)
  }
  const handleRemoveCard = () => {
    setCount(prev => prev - 1)
  }
  return (
    <div className={classes.productCard}>
        <div className={classes.header}>
      <div className={classes.rating}>
      <FontAwesomeIcon icon={faStar} style={{color:"#ff9935"}} />
        <p>{product.rating}</p>
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
        <img src={product.imageUrl} alt="product_image"></img>
      </div>
      <h3>{product.name}</h3>
      <div className={classes.price}>
      <div className={classes.price_new}>{product.price} ₽</div>
      <div className={classes.price_old}>{}</div>
      <div className={classes.discount}>-{product.discount}%</div>
      </div>
      {count > 0 && `Добавлено в корзину ${count}`}
      <Button onClick={handleAddCard}>Купить</Button>
     <ChangeCount onAdd={handleAddCard} onDecrement={handleRemoveCard} count={count}/>
    </div>
  );
};

export default ProductCard;
