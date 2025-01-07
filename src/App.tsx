import { Layout, ProductCard } from "@/components";
import Profile from "./components/Profile/Profile";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import { useContext, useState } from "react";
import { Product } from "./types/Product";
import Cart from "./components/Cart/Cart";
import ThemeChanger from "./ThemeCanger/ThemeChanger";
import { CartContext } from "./context/CartContext/CartContext";

const App = () => {
  const {state, dispatch} = useContext(CartContext);
 
  
  // const handleIncrement = (product: Product) => {
  //   setProducts((prev) => {
  //     return prev.map((item) =>
  //       item.id === product.id
  //         ? { ...item, count: (item.count || 0) + 1 }
  //         : item
  //     );
  //   });
  // };
  // const handleDecrement = (product: Product) => {
  //   setProducts((prev) => {
  //     return prev.map((item) =>
  //       item.id === product.id
  //         ? { ...item, count: (item.count || 0) - 1 }
  //         : item
  //     );
  //   });
  // };
  // const handleClear = () => {
  //   setProducts((prev) => {
  //     return prev.map((item) => ({ ...item, count: 0 }));
  //   });
  // };
  // const handleRemove = (product: Product) => {
  //   setProducts((prev) => {
  //     return prev.map((item) =>
  //       item.id === product.id ? { ...item, count: 0 } : item
  //     );
  //   });
  // };
  // const handleFavorite = (product: Product) => {
  //   setProducts((prev) => {
  //     return prev.map((item) =>
  //       item.id === product.id
  //         ? { ...item, isFavorite: !item.isFavorite }
  //         : item
  //     );
  //   });
  // };

  return (
    <div>
      <Layout>
        <ThemeChanger/>
        <Profile firstName="Иван" LastName="Иванов" />
        <Cart
          cartItems={state.filter((item) => item.count && item.count > 0)}
        />
        <CatalogPage
        />
      </Layout>
    </div>
  );
};

export default App;
