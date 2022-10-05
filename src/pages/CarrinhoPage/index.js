import { useContext } from "react";
import { CarrinhoContext } from "../../context/carrinho";

export function CarrinhoPage() {
  const carrinho = useContext(CarrinhoContext);

  return (
    <>
      {carrinho.tea.map((currentTea) => {
        return <h1>{currentTea.teaTitle}</h1>;
      })}
    </>
  );
}
