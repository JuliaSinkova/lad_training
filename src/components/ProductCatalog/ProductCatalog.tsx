import classes from "./ProductCatalog.module.scss";
import ProductCard from "../Product/Product";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext/CartContext";


const ProductCatalog = () => {
  const {state, dispatch} = useContext(CartContext);
  return (
    <div className={classes.catalog}>
      {state.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;
