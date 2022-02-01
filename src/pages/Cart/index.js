import { useNavigate } from 'react-router-dom'

import Navbar from "../../components/Navbar"
import { useCart } from "../../components/CartContext"
import { useProduto } from "../../components/DescriptionContext";

import { MdKeyboardBackspace } from "react-icons/md";
import { Container, Body, Shop, ShopItem, ArrowLeft } from "./styles"



const Cart = ({ products }) => {
  const navigate = useNavigate()
  const cart = useCart()
  const remove = (id) => () => {
    cart.removeFromCart(id)
  };

  return (
    <Container>
      <Navbar />
      <ArrowLeft onClick={() => {navigate('/description')} }><MdKeyboardBackspace/></ArrowLeft>

      {Object.keys(cart.cart).map((key) => {
        const product = cart.cart[key]
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
