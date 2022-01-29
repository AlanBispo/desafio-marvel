import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #1e1e1e;
    color: white;
    display: flex;

`
export const NavItems = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const About = styled.div`
   color: white;
   font-size: 1.1rem;
   margin-left: 15px;
   @media screen and (min-width: 484px) {
    font-size: 1.2rem;
    }
    @media screen and (min-width: 992px ) {
    font-size: 1.3rem;
    }
`
export const Logo = styled.img`
    background-color: transparent;
    color: transparent;
    font-weight: bold;
    width: 60px;
    height: 50px;
    margin: 0px 60px;
    @media screen and (min-width: 484px ) {
        width: 70px;
        height: 70px;
    }
    @media screen and (min-width: 992px ) {
        width: 90px;
        height: 90px;
    }
`
export const Icons = styled.div`
    display: grid;
    grid-gap: 13px;
    grid-template-columns: repeat(2, 1fr);
    margin-right: 15px;
    font-size: 18px;
    color: white;

`
export const Icon = styled.button`
    color: white;
    background-color: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
    @media screen and (min-width: 484px) {
        font-size: 24px;
    }
    @media screen and (min-width: 992px ) {
        font-size: 28px
    }
`
