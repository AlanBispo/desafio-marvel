import Navbar from "../../components/Navbar";

import { Container, Body, Shop, ShopItem } from "./styles";
import { useCart } from "../../components/CartContext";
import Product from "../../components/Product";

const Cart = ({ products }) => {
  const cart = useCart();
  const remove = (id) => () => {
    cart.removeFromCart(id);
  };

  return (
    <Container>
      <Navbar />
      {Object.keys(cart.cart).map((key) => {
        console.log(cart.cart);
        const product = cart.cart[key];
        return (
          <div key={key}>
            <h1>{product.title}</h1>
            <img
              src={product.thumbnail.path + "." + product.thumbnail.extension}
              alt="img-hq"
            />
            <button onClick={remove(key)}>remover</button>
          </div>
        );
      })}
    </Container>
  );
};

export default Cart;
