import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    min-height: 100%;
    background-color: #e1e1e1;
`
export const Comics = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);

    }
`
export const ShowComics = styled.div`
    background-color: #eee;
    margin: 30px 10px 0px 10px;
    height: 260px;
    width: 170px;
    box-shadow: 4px 4px 6px black;
    border-radius: 10px;

    &:hover{
        box-shadow: 4px 4px 10px black;
    }
    @media screen and (min-width: 1000px) {
        margin: 30px 10px 0px 40px;
    }
`
export const Title = styled.h1`
    font-size: 1.4rem;
    text-align: center;
    margin-top: 15px;
    @media screen and (min-width: 1000px) {
        font-size: 1.8rem;
    }
`
export const Img = styled.img`
    height: 180px;
    width: 170px;
    cursor: pointer;
    color: transparent;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 30px;
`
export const TitleImg = styled.h4`
    font-size: 0.8rem;
    color: black;
    cursor: pointer;
    margin-bottom: 5px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 24px;
  background-color: #e51e25;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition-delay: 100ms;
  &:hover {
    opacity: 0.8;
  }
`;
