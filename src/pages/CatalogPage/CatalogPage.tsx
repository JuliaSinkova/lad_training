import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import classes from "./CatalogPage.module.scss";
import { Product } from "@/types/Product";


const CatalogPage = () => {
  return (
    <div className={classes.catalog}>
      <ProductCatalog/>
    </div>
  );
};

export default CatalogPage;
