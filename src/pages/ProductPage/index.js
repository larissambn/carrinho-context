import { useEffect, useState } from "react";

export function ProductPage() {
  const [tea, setTea] = useState({});

  //   useEffect(() => {
  //     async function fetchTea() {
  //       const response = await api.get("/tea/${teaId}");
  //     }
  //     setTea(response.data);
  //   }, []);

  return (
    <>
      <div>
        <h1>{tea.teaTitle}</h1>
        <p>{tea.teaDescription}</p>
        <button>Adicionar ao carrinho</button>
        <button>Ver produto</button>
        <div>
          <img
            src={tea.teaImg}
            alt="Tea"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
    </>
  );
}
