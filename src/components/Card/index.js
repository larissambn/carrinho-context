import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/carrinho";

export function Card(props) {
  const navigate = useNavigate();

  const carrinho = useContext(CarrinhoContext);

  console.log(carrinho.tea);

  function handleCarrinho() {
    carrinho.setTea([...carrinho.tea, { ...props }]);
  }

  return (
    <div>
      <h1>{props.teaTitle}</h1>
      <p>{props.teaDescription}</p>
      <button onClick={handleCarrinho}>Adicionar ao carrinho</button>
      <button
        onClick={() => {
          navigate(`/${props.teaId}`);
        }}
      >
        Ver produto
      </button>
      <div>
        <img
          src={props.teaImg}
          alt="Tea"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
}
