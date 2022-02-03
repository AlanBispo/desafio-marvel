import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container, Body, Box, Button, Img } from "./styles";

import Marvel from "../../assets/images/marvel.jpg";
import MarvelSmall from "../../assets/images/marvel-small.jpg";

const MainPage = () => {
  return (
    <Container>
      <Navbar />
      <Body>
        <Box>
          <Img
            src={MarvelSmall}
            srcSet={`${Marvel} 768px, ${MarvelSmall} 300px`}
          />
          <Link to="/allshop">
            <Button>Ver Tudo</Button>
          </Link>
        </Box>
      </Body>
      <Footer />
    </Container>
  );
};

export default MainPage;
