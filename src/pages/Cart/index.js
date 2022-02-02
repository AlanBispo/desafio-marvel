import { useNavigate } from 'react-router-dom'

import Navbar from "../../components/Navbar"
import { useCart } from "../../components/CartContext"

import { MdKeyboardBackspace } from "react-icons/md";
import { Container, Body, Menu, Span, Shop, ShopItem, ImgTitle, ArrowLeft, Title, Img, Button, Quantity,Price } from "./styles"



const Cart = () => {
  const navigate = useNavigate()
  const cart = useCart()
  const remove = (id) => () => {
    cart.removeFromCart(id)
  };
  let subTotal = 0
  Object.keys(cart.cart).map((key) => {
    const product = cart.cart[key]
    return(
      Object.keys(product.prices).map((key) => {
        const price = product.prices;
        subTotal += (price[key].price * product.quantity)
        return subTotal
      })
    )
  })

  return (
    <Container>
      <Navbar />
      <ArrowLeft onClick={() => {navigate('/description')} }><MdKeyboardBackspace/></ArrowLeft>
        <Body>
          <Menu>
            <Span>Produto:</Span>
            <Span>Quantidade:</Span>
            <Span>Valor:</Span>
          </Menu>
          <Shop>
            {Object.keys(cart.cart).map((key) => {
              const product = cart.cart[key]
              return (
                <ShopItem key={key}>
                  <ImgTitle>
                    <Title>{product.title}</Title>
                    <Img
                      src={product.thumbnail.path + "." + product.thumbnail.extension}
                      alt="img-hq"
                    />
                    <Button onClick={remove(key)}>Remover</Button>
                  </ImgTitle>
                  <Quantity>{product.quantity}</Quantity>
                  {Object.keys(product.prices).map((key) => {
                    const price = product.prices;
                    return(
                      <>
                      <Price>R$ {price[key].price * product.quantity}</Price>

                      </>
                    )
                  })}
                </ShopItem>
              );
            })}
            </Shop>
        </Body>
    </Container>
  );
};

export default Cart;
