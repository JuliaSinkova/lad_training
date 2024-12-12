import ProductCatalog from '@/components/ProductCatalog/ProductCatalog'
import classes from './CatalogPage.module.scss'

const CatalogPage = () => {
  return (
    <div className={classes.catalog}>
        <ProductCatalog/>
    </div>
  )
}

export default CatalogPage