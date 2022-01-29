import { useEffect, useState } from "react";

import { Container, Comics, ShowComics, Img } from "./styles";
import Pagination from '../../components/Pagination';
import Navbar from '../../components/Navbar'

import axios from "axios";

const LIMIT = 100;
const timeStamp = "1643373767";
const Key = "926d3c5f294702f8d21233924fc645b1"; //public
const hash = "b5162ec8a8fe9eba16751f65e528f67b";

const AllShop = () => {
    const [comics, setComics] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)
    console.log(comics);
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
      <Comics>
        {currentItems.map(comic =>
            <ShowComics key={comic.id}>
                <Img src={comic.thumbnail.path+'.'+comic.thumbnail.extension} alt='thumbnail'></Img>
                <h4>{comic.title.length > 30 ? comic.title=comic.title.substring(0,30)+'...' : comic.title}</h4>
            </ShowComics>
        )}
      </Comics>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  );
};
// 50921
export default AllShop;
