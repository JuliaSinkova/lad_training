import { Layout, ProductCard } from "@/components";
import Profile from "./components/Profile/Profile";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import { useState } from "react";
import { Product } from "./types/Product";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState<Array<Product>>([
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
      count: 1,
    },
  ]);
  const handleIncrement = (product: Product) => {
    setProducts((prev) => {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, count: (item.count || 0) + 1 }
          : item
      );
    });
  };
  const handleDecrement = (product: Product) => {
    setProducts((prev) => {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, count: (item.count || 0) - 1 }
          : item
      );
    });
  };
  const handleClear = () => {
    setProducts((prev) => {
      return prev.map((item) => ({ ...item, count: 0 }));
    });
  };
  const handleRemove = (product: Product) => {
    setProducts((prev) => {
      return prev.map((item) =>
        item.id === product.id ? { ...item, count: 0 } : item
      );
    });
  };
  const handleFavorite = (product: Product) => {
    setProducts((prev) => {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      );
    });
  };

  return (
    <div>
      <Layout>
        <Profile firstName="Иван" LastName="Иванов" />
        <Cart
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onClear={handleClear}
          onRemove={handleRemove}
          onFavorite={handleFavorite}
          cartItems={products.filter((item) => item.count && item.count > 0)}
        />
        <CatalogPage
          products={products}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onFavorite={handleFavorite}
        />
      </Layout>
    </div>
  );
};

export default App;
