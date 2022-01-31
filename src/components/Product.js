import { Link } from "react-router-dom";

import { ShowComics, Img, TitleImg } from "../pages/AllShop/styles";
import { useCart } from "./CartContext";
import { useProduto } from "./DescriptionContext";

import { MdShoppingCart } from "react-icons/md";

const Product = ({ comic }) => {
  const cart = useCart();
  const produto = useProduto();
  const add = (comic) => () => {
    cart.addToCart(comic);
  };
  const list = (comic) => () => {
    produto.addToDescription(comic);
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
      <TitleImg >
        {comic.title.length > 30
          ? (comic.title = comic.title.substring(0, 30) + "...")
          : comic.title}{" "}
        <button onClick={add(comic)}>
          <MdShoppingCart />
        </button>
      </TitleImg>
    </ShowComics>
  );
};
export default Product;
