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
    width: 90%;
    height: 100%;

`
export const ShowComics = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 30px;
    height: 210px;
    width: 150px;
    border: 1px solid black;
    border-radius: 16px;
    margin-left: 30px;
    text-align: center;
    background-color: Salmon;
    cursor: pointer;
`
export const Img = styled.img`
    height: 150px;
    width: 150px;
    border-bottom-style: solid;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

`
export const TitleImg = styled.h4`
    font-size: 1rem;
`
