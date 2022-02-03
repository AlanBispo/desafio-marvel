import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import { useCart } from "../../components/CartContext";
import Cupons from "../../resources/cupons.json"

import { MdKeyboardBackspace } from "react-icons/md";
import {
  Container,
  Body,
  Menu,
  Span,
  Shop,
  ShopItem,
  ImgTitle,
  ArrowLeft,
  Title,
  Img,
  ButtonRemove,
  Quantity,
  Price,
  SubTotal,
  ButtonTotal,
  Input,
  Vazio,
} from "./styles";

const Cart = () => {
  const navigate = useNavigate();
  const [cupom, setCupom] = useState('')
  const cart = useCart();
  const remove = (id) => () => {
    cart.removeFromCart(id);
  };
  let id = 0
  let subTotal = 0;
  console.log(id)
  Object.keys(cart.cart).map((key) => {
    const product = cart.cart[key];
    return Object.keys(product.prices).map((key) => {
      const price = product.prices;
      subTotal += price[key].price * product.quantity;
      id = product.id;
      return subTotal;
    });
  });

  let total = 0;
  let bool = false;
  const AplicarCupom = () => {
    Cupons.map((key) => {
      if(key === cupom){
        bool = true
        total = subTotal-(subTotal*0.2)
      }
      return total
    })
  }
  return (
    <Container>
      <Navbar />
      {id === 0 ? (
        <ArrowLeft
          onClick={() => {
            navigate("/allshop");
          }}
        >
          <MdKeyboardBackspace />
        </ArrowLeft>
      ) : (
        <ArrowLeft
          onClick={() => {
            navigate("/description");
          }}
        >
          <MdKeyboardBackspace />
        </ArrowLeft>
      )}
      {id === 0 ? (
        <Vazio>
          <h2>Oops...! Seu carrinho está vazio!</h2>
        </Vazio>
      ) : (
        <Body>
          <Menu>
            <Span>Produto:</Span>
            <Span>Quantidade:</Span>
            <Span>Valor:</Span>
          </Menu>
          <Shop>
            {Object.keys(cart.cart).map((key) => {
              const product = cart.cart[key];
              return (
                <ShopItem key={key}>
                  <ImgTitle>
                    <Title>{product.title}</Title>
                    <Img
                      src={
                        product.thumbnail.path +
                        "." +
                        product.thumbnail.extension
                      }
                      alt={product.title}
                    />
                    <ButtonRemove onClick={remove(key)}>Remover</ButtonRemove>
                  </ImgTitle>
                  <Quantity>{product.quantity}</Quantity>
                  {Object.keys(product.prices).map((key) => {
                    const price = product.prices;
                    return (
                      <Price key={key}>
                        R$ {price[key].price * product.quantity}
                      </Price>
                    );
                  })}
                </ShopItem>
              );
            })}
            <SubTotal>
              <label htmlFor='cup'>Cupom de desconto:
              <Input type="text"
              placeholder="digite um cupom válido"
              id="cup"
              value={cupom}
              onChange={(ev) => setCupom(ev.target.value)}
              onClick={AplicarCupom(cupom) }
              />
              </label>
              </SubTotal>
            <SubTotal>Valor Total: {subTotal.toFixed(2)}</SubTotal>
            <SubTotal>{bool === true ? `Valor com desconto: ${total.toFixed(2)}` : null}</SubTotal>
            <SubTotal>
              <ButtonTotal>Finalizar Compra</ButtonTotal>
            </SubTotal>
          </Shop>
        </Body>
      )}
    </Container>
  );
};

export default Cart;
