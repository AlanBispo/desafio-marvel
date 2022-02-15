import { useNavigate } from "react-router-dom";

import { useProduto } from "../../components/DescriptionContext";
import { useCart } from "../../components/CartContext";

import Navbar from "../../components/Navbar";

import { MdShoppingCart, MdKeyboardBackspace } from "react-icons/md";

import {
  DescriptionMain,
  DescriptionComic,
  DescriptionItem,
  ArrowLeft,
  Title,
  Img,
  Creators,
  Price,
  Span,
  CreatorsTitle,
  Button,
  Descricao,
} from "./styles";


const Description = () => {
  const navigate = useNavigate(); // retornar à pagina anterior
  const cart = useCart();
  const produto = useProduto(); // produto resgatar o array com o produto
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  const product = produto.produto; // variavel para pegar o produto
  return (
    <DescriptionMain>
      <Navbar />
      <ArrowLeft
        onClick={() => {
          navigate("/allshop");
        }}
      >
        <MdKeyboardBackspace />
      </ArrowLeft>
      <DescriptionComic>
        <DescriptionItem>
          <Title>{product.title}</Title>
          <Img
            src={product.thumbnail.path + "." + product.thumbnail.extension}
            alt={product.title}
          />
          <Creators>
            <CreatorsTitle>
              {product.creators.items.length > 1 ? "Criadores: " : "Criador: "}{" "}
              <br />
            </CreatorsTitle>
            {Object.keys(product.creators.items).map((key) => {
              const items = product.creators.items;
              return (
                <Span>
                  {items[key].name}
                  <br />
                </Span>
              );
            })}
          </Creators>

          <Descricao>
            <Title>Descrição:</Title>
            <Span>
              {product.description
                ? product.description
                : "Desculpe, esse produto não tem descrição! :("}
            </Span>
          </Descricao>

          {Object.keys(product.prices).map((key) => {
            const price = product.prices;
            return (
              <Price>
                <Span>Valor: R$ {price[key].price}</Span>
              </Price>
            );
          })}

          <Button onClick={add(produto.produto)}>
            Adicionar ao Carrinho
            <MdShoppingCart size={18} />
          </Button>
        </DescriptionItem>
      </DescriptionComic>
    </DescriptionMain>
  );
};

export default Description;
