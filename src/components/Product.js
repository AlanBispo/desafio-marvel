import { ShowComics, Img, TitleImg } from "../pages/AllShop/styles";
import { useCart } from "./CartContext"

const Product = ({comic}) => {
    const cart = useCart();
    const add = (comic) => () => {
      cart.addToCart(comic);
    }
    return (
    <ShowComics onClick={add(comic)}>
        <Img src={comic.thumbnail.path+'.'+comic.thumbnail.extension} alt='thumbnail'></Img>
        <TitleImg>
          {comic.title.length > 30 ? comic.title=comic.title.substring(0,30)+'...' : comic.title}
        </TitleImg>
    </ShowComics>
    );
}
export default Product;
