import styled from 'styled-components';

export const Container = styled.main`
    min-height: 100vh;
    width: 100%;
`
export const Body = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Menu = styled.section`
    width: 80%;
    display: flex;
    justify-content:space-between;
`
export const Span = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
`
export const Shop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const ShopItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0px;

`
export const ArrowLeft = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 28px;
`
export const ImgTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`
export const Title = styled.h1`
    font-size: 1.1rem;
    margin-bottom: 10px;
    width: 170px;
`
export const Img = styled.img`
    width: 150px;
    height: 170px;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Button = styled.button`
    width: 60px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
    &:hover{
        text-decoration: underline;
    }
    &:active{
        text-decoration: underline;
    }
`
export const Quantity = styled.span`
    display: flex;
    align-items: center;
    padding-left: 30px;

`
export const Price = styled.span`
    display: flex;
    align-items: center;
    padding-left: 80px;
`
