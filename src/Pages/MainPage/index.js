import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"

import {
  Container,
  Body,
  Box,
  Button,
  Footer,
  Img,
} from "./styles";

import Marvel from "../../assets/images/marvel.jpeg"
import MarvelSmall from "../../assets/images/marvel-small.jpeg"

const MainPage = () => {
  return (
    <Container>
      <Navbar />
      <Body>
        <Box>

          <Img src={MarvelSmall} srcSet={`${Marvel} 768px, ${MarvelSmall} 300px`}></Img>

          <Link to="/allshop">
            <Button>Ver Tudo</Button>
          </Link>
        </Box>
      </Body>
      <Footer>
        © Todos os direitos para Marvel Studios
        <br />
        By: Alandelon Bispo
      </Footer>
    </Container>
  );
};

export default MainPage;
