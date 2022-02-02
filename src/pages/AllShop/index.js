import { useEffect, useState } from "react";
/* import { Link } from "react-router-dom"; */

import axios from "axios";

import { Container, Comics, Title} from "./styles";
import Pagination from '../../components/Pagination';
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'

const LIMIT = 100;
const timeStamp = "1643373767";
const Key = "926d3c5f294702f8d21233924fc645b1"; //public
const hash = "b5162ec8a8fe9eba16751f65e528f67b";

const AllShop = () => {
    const [comics, setComics] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(comics.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = comics.slice(startIndex, endIndex);

    useEffect(() => {
      axios.get(
        `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${Key}&hash=${hash}&limit=${LIMIT}`)
        .then(res => {
          const dadosQuadrinhos = res.data.data.results
          setComics(dadosQuadrinhos)
        })
    }, []);

  return (
    <Container id="comics">
      <Navbar/>
      <Title>Todos os produtos</Title>
      <Comics>
        {currentItems.map(comic =>
          <Product comic={comic} key={comic.id} />
        )}
      </Comics>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  );
};

export default AllShop;
