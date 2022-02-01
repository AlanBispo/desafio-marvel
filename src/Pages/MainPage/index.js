import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"

import {
  Container,
  Body,
  Box,
  Title,
  Button,
  Subtitle,
  Footer,
  Img,
} from "./styles";

import Marvel from "../../assets/images/marvel.jpeg"

const MainPage = () => {
  return (
    <Container>
      <Navbar />
      <Body>
        <Box>

          <Img src={Marvel}></Img>
          
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
