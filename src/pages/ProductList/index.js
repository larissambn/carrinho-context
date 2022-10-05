import { Card } from "../../components/Card";

export function ProductList() {
  return (
    <>
      <Card
        teaId="1"
        teaTitle="Erva Cidreira"
        teaDescription="só é gostoso mesmo"
        teaImg="https://t2.uc.ltmcdn.com/pt/posts/8/3/3/como_plantar_capim_santo_20338_600_square.jpg"
      />
      <Card
        teaId="2"
        teaTitle="Erva doce"
        teaDescription="só é gostoso mesmo"
        teaImg="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/07/lemon-5240181_1920-810x540.jpg"
      />
      <Card
        teaId="3"
        teaTitle="Capim santo"
        teaDescription="nem é bom"
        teaImg="https://t2.uc.ltmcdn.com/pt/posts/8/3/3/como_plantar_capim_santo_20338_600_square.jpg"
      />
      <Card
        teaId="4"
        teaTitle="Boldo"
        teaDescription="pro estomago e ressaca"
        teaImg="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/07/lemon-5240181_1920-810x540.jpg"
      />
    </>
  );
}
