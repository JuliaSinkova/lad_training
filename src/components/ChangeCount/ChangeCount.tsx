import { Product } from "@/types/Product";
import classes from "./ChangeCount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

type ChangeCountProps = {
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  product: Product;
};

const ChangeCount = ({
  onIncrement,
  onDecrement,
  product,
}: ChangeCountProps) => {
  return (
    <div className={classes.block}>
      <button
        onClick={() => {
          onDecrement(product);
        }}
        className={classes.btn}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      {product.count} шт.
      <button
        onClick={() => {
          onIncrement(product);
        }}
        className={classes.btn}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ChangeCount;
