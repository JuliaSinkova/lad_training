import classes from "./ProductCatalog.module.scss";
import ProductCard from "../Product/Product";
import { Product } from "@/types/Product";

type ProductCatalogProps = {
  products: Product[];
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onFavorite: (product: Product) => void;
};
function ProductCatalog({
  products,
  onIncrement,
  onDecrement,
  onFavorite,
}: ProductCatalogProps) {
  return (
    <div className={classes.catalog}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;
