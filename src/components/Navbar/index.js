import { Header, NavItems, About, Logo, Icons } from "./styles";
import { MdShoppingCart, MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <Header>
      <NavItems>
        <About>Sobre nós</About>
        <Logo>MarvelHQ</Logo>
        <Icons>
          <MdShoppingCart />
          <MdLogin />
        </Icons>
      </NavItems>
    </Header>
  );
};

export default Navbar;
