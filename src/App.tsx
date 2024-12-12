import { Layout, ProductCard } from "@/components";
import Profile from "./components/Profile/Profile";
import CatalogPage from "./pages/CatalogPage/CatalogPage";





const App = () => {


  return (
    <div>
  <Layout>
    <Profile firstName="Иван" LastName="Иванов"/>
    <CatalogPage/>
  </Layout>
    </div>
  );
}

export default App;
