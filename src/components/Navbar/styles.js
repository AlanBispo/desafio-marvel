import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 30px;
    background: rgb(8,4,70);
    background: linear-gradient(90deg, rgba(8,4,70,1) 20%, rgba(247,0,38,1) 50%, rgba(8,4,70,1) 80%);
    color: white;
`
export const NavItems = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
`
export const About = styled.div`
    padding-left: 20px;

`
export const Logo = styled.div`
    margin-right:  20px;

`
export const Icons = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    margin-right: 10px;

`
