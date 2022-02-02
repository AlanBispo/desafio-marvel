import { Link } from "react-router-dom"

import { ShowComics, Img, TitleImg } from "../pages/AllShop/styles"
import { useProduto } from "./DescriptionContext"


const Product = ({ comic }) => {
  const produto = useProduto();
  const list = (comic) => () => {
    produto.addToDescription(comic);
  };
  const titulo = comic.title

  return (
    //comic = results
    <ShowComics >
      <Link to='/description'>
        <Img onClick={list(comic)}
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt="thumbnail"
        ></Img>
      <TitleImg >
        {titulo.length > 30 ? titulo.substring(0, 30)+'...' : titulo}
      </TitleImg>
      </Link>
    </ShowComics>
  );
};
export default Product;
