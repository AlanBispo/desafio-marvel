import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #e51e25;
  color: white;
  display: flex;
`;
export const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const About = styled.div`
  color: white;
  font-size: 1.1rem;
  margin-left: 15px;
  @media screen and (min-width: 484px) {
    font-size: 1.2rem;
  }
`;
export const Logo = styled.img`
  background-color: transparent;
  color: transparent;
  font-weight: bold;
  width: 70px;
  height: 70px;
  margin: 0px 60px;
  @media screen and (min-width: 484px) {
    width: 90px;
    height: 90px;
  }
`;
export const Icons = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 15px;
  color: white;
`;
export const Icon = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  @media screen and (min-width: 484px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const Count = styled.span`
  position: absolute;
  font-size: 1rem;
  color: white;
  font-weight: bold;
`;
