import classes from "./ProductCatalog.module.scss";
import ProductCard from "../Product/Product";

function ProductCatalog() {
  const product = [
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 2,
      name: "Игровая приставка Sony Playstation",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-19/703/148/346/312/15/100026864564b0.jpg",
      price: 60165,
      discount: 70,
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Беспроводные наушники Realme",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-32/367/076/812/214/50/600009450240b0.png",
      price: 3655,
      discount: 20,
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Кофемашина автоматическая Polaris",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-12/500/310/491/129/143/8/100069893515b0.png",
      price: 10655,
      discount: 35,
      rating: 4.2,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Умная колонка Яндекс Станция",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/885/929/177/817/054/600013108091b0.jpeg",
      price: 15655,
      discount: 55,
      rating: 4.9,
      isFavorite: false,
    },
  ];
  return (
    <div className={classes.catalog}>
      {product.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductCatalog;
