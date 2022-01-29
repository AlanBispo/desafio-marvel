import { Header, NavItems, About, Logo, Icons, Icon } from "./styles";
import { Link } from "react-router-dom";

import { MdShoppingCart, MdLogin } from "react-icons/md";

import logo from "../../assets/images/logo.svg";


const Navbar = () => {
  return (
    <Header>
      <NavItems>
        <Link to="/about">
          <About>Sobre nós</About>
        </Link>

        <Link to="/">
         <Logo src={logo} />
        </Link>

        <Icons>
        <Link to="/shop">
          <Icon >
            <MdShoppingCart size={20} />
          </Icon>
        </Link>

        <Link to="/login">
          <Icon >
          <MdLogin size={20} />
          </Icon>
        </Link>




        </Icons>
      </NavItems>
    </Header>
  );
};

export default Navbar;
