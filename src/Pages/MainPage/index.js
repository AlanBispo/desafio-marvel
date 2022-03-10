import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container, Body, Box, Button, Img } from "./styles";

import small from "../../assets/images/marvel-small.jpg";
import large from "../../assets/images/marvel-large.jpg";

const MainPage = () => {
  console.log(window.screen.width)
  return (
    <Container>
      <Navbar />
      <Body>
        <Box>
            { window.screen.width <= 400 ? 
              <Img
                src={small}
              />
              : 
              <Img
                src={large}
              />
            }
                 
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
