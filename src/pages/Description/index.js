import { useProduto } from "../../components/DescriptionContext";
import Navbar from "../../components/Navbar";

import { Container, DescriptionItem } from "./styles";

const Description = () => {
  const produto = useProduto();
  return (
    <Container>
      <Navbar />
      <DescriptionItem>
        {Object.keys(produto.produto).map((key) => {
          const product = produto.produto[key]
          return (
            <div key={key}>
              <h1>{product.title}</h1>
              <img
                src={product.thumbnail.path + "." + product.thumbnail.extension}
                alt="img-hq"
              />
            </div>
          );
        })}
      </DescriptionItem>
    </Container>
  );
};

export default Description;
