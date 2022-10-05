import { useContext } from "react";
import { CarrinhoContext } from "../../context/carrinho";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const carrinho = useContext(CarrinhoContext);
  const navigate = useNavigate();

  return (
    <div>
      <strong>{`${carrinho.tea.length} itens no seu carrinho`}</strong>
      <button
        onClick={() => {
          navigate("/carrinho");
        }}
      >
        Ver meu carrinho
      </button>
    </div>
  );
}
