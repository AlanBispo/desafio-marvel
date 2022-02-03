import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;
    width: 100%;
`
export const Body = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
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
    width: 80%;
    height: 100%;
`
export const ShopItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px;
`
export const ArrowLeft = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 28px;
    position: absolute;
    margin: 10px;
`
export const ImgTitle = styled.div`
    display: flex;
    flex-direction: column;
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
export const ButtonRemove = styled.button`
    width: 60px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.1rem;
    margin-top: 10px;
    &:hover{
        text-decoration: underline;
    }
    &:active{
        text-decoration: underline;
    }
    @media screen and (min-width: 768px){
        font-size: 1.2rem;
    }
`
export const Quantity = styled.span`
    display: flex;
    align-items: center;
`
export const Price = styled.span`
    display: flex;
    align-items: center;
`
export const SubTotal = styled.section`
    display: flex;
    justify-content: center;
    padding-right: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    @media screen and (min-width: 768px){
        font-size: 1.2rem;
    }
`
export const ButtonTotal = styled.button`
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #e51e25;
    color: white;
    margin: 30px 0px;
    font-size: 1rem;
    cursor: pointer;
`
export const Input = styled.input`
    margin: 10px 0px 15px 10px;
    width: 150px;
    height: 27px;
    &focus{
        border: 0.1px solid #1e1e1e;
    }
    @media screen and (min-width: 768px){
        width: 160px;
        height: 30px;
    }
    @media screen and (min-width: 1000px){
        width: 170px;
        height: 35px;
    }
`
export const Vazio = styled.div`
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media screen and (min-width: 768px){
        font-size: 1.3rem;
    }
`
