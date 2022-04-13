import { Link } from "react-router-dom";

import { MdShoppingCart} from "react-icons/md";

import {
  ShowComics,
  Img,
  Description,
  TitleImg,
  Button
} from "../Pages/AllShop/styles";

import { useProduto } from "./DescriptionContext";
import { useCart } from "./CartContext";

const Product = ({ comic }) => {
  const produto = useProduto();
  const list = (comic) => () => {
    produto.addToDescription(comic);
  };
  const cart = useCart();
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  const titulo = comic.title;
  console.log(produto.produto)
  
  return (
    //comic = results
    <ShowComics onClick={list(comic)}>
      <Link to="/description">
        <Img
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt="thumbnail"
        />
      </Link>
        <Description>
          <Link to="/description">
            <TitleImg>
              {titulo.length > 20 ? titulo.substring(0, 20) + "..." : titulo}
              <br />
            </TitleImg>
          </Link>
          <>
            {Object.keys(comic.prices).map((key) => {
              const price = comic.prices;
              return <TitleImg key={key}>Valor: R$ {price[key].price}</TitleImg>;
            })}
          </>
          <Button onClick={list(comic) && add(comic)}>
            Adicionar ao Carrinho
            <MdShoppingCart size={18} style={{marginLeft: "5px"}}/>
          </Button>
        </Description>
    </ShowComics>
  );
};
export default Product;
