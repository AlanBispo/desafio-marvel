import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #1e1e1e;
    color: white;
    display: flex;
    justify-content: center;
`
export const NavItems = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const About = styled.div`
   color: white;
`
export const Logo = styled.img`
    background-color: transparent;
    color: transparent;
    font-weight: bold;
    width: 100px;
    height: 35px;
    margin: 0px 60px;
`
export const Icons = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    margin-right: 10px;
    font-size: 18px;
    color: white;
`
export const Icon = styled.button`
    color: white;
    background-color: transparent;
    border: none;
`
