import { Link } from "react-router-dom";

import { ShowComics, Img, TitleImg } from "../pages/AllShop/styles";
import { useProduto } from "./DescriptionContext";
import { useCart } from "./CartContext"

const Product = ({ comic }) => {
  const cart = useCart()
  const produto = useProduto();
  const list = (comic) => () => {
    produto.addToDescription(comic);
  };
  const add = (comic) => () => {
    cart.addToCart(comic);
  };

  return (
    //comic = results
    <ShowComics >
      <Link to='/description'>
        <Img onClick={list(comic)}
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt="thumbnail"
        ></Img>
      </Link>
      <TitleImg onClick={add(comic)} >
        {/* {comic.title.length > 30
          ? (comic.title = comic.title.substring(0, 30) + "...")
          : comic.title}{" "} */}
          {comic.title}
      </TitleImg>
    </ShowComics>
  );
};
export default Product;
