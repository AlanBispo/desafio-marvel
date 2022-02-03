import { Header, NavItems, About, Logo, Icons, Icon, Count } from "./styles"
import { Link } from "react-router-dom"
import { useCart } from "../CartContext"

import { MdShoppingCart, MdLogin } from "react-icons/md"

import logo from "../../assets/images/logo.svg"

const Navbar = () => {
  const cart = useCart()

  const itemsCount = Object.values(cart.cart).reduce((acc, item) => (acc + item.quantity), 0)
  return (
    <Header>
      <NavItems>
        <Link to="/about">
          <About>Sobre</About>
        </Link>

        <Link to="/">
          <Logo src={logo} />
        </Link>

        <Icons>
          <Link to="/cart">
            <Icon>
              <MdShoppingCart  />{ itemsCount > 0 && <Count>{itemsCount}</Count>}
            </Icon>
          </Link>
          <Link to="/login">
            <Icon>
              <MdLogin  />
            </Icon>
          </Link>
        </Icons>
      </NavItems>
    </Header>
  );
};

export default Navbar;
