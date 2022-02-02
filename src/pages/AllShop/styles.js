import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
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
    color: transparent;
    margin: 30px 10px 0px 10px;
    height: 240px;
    width: 160px;
    border: 1px solid black;
    border-radius: 10px;
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
    width: 160px;
    cursor: pointer;
    color: transparent;
    border: 1px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const TitleImg = styled.h4`
    font-size: 1rem;
    color: black;
    cursor: pointer;
`
