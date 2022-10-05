import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage";
import { CarrinhoComponent } from "./context/carrinho";
import { CarrinhoPage } from "./pages/CarrinhoPage";

function App() {
  return (
    <>
      <CarrinhoComponent>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:teaId" element={<ProductPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
        </Routes>
      </CarrinhoComponent>
    </>
  );
}

export default App;
