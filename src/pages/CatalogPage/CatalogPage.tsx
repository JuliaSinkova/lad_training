import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import classes from "./CatalogPage.module.scss";
import { Product } from "@/types/Product";

type CatalogPageProps = {
  products: Product[];
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onFavorite: (product: Product) => void;
};
const CatalogPage = ({
  products,
  onIncrement,
  onDecrement,
  onFavorite
}: CatalogPageProps) => {
  return (
    <div className={classes.catalog}>
      <ProductCatalog onIncrement={onIncrement} onDecrement={onDecrement} onFavorite={onFavorite} products={products}/>
    </div>
  );
};

export default CatalogPage;
