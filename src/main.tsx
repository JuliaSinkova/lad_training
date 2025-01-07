import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import CartProvider from "./context/CartContext/CartProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </CartProvider>
  </StrictMode>,
);
