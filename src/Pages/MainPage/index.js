import { Container, Body, Box, Title, Button, Subtitle, Footer, Img  } from "./styles"

import { Link } from "react-router-dom"

import Navbar from '../../components/Navbar'

const MainPage = () => {

  return (
    <Container >
      <Navbar />
      <Body>
        <Box>

            <Title>O melhor do mundo dos quadrinhos </Title>
            <Subtitle>Confira as melhores e mais atualizadas HQ's do mundo Marvel!</Subtitle>
            <Link to="/allshop"><Button>Ver Tudo</Button></Link>

        </Box>
      </Body>
      <Footer>© Todos os direitos para Marvel Studios
        <br />
        By: Alandelon Bispo
      </Footer>
    </Container>


  );
};

export default MainPage;
