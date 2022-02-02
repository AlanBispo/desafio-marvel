import styled from "styled-components";

export const Container = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  color: black;
`;
export const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  background-image: url("../../assets/images/marvel.jpeg");
`;
export const Box = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  border: 1px solid transparent;
  border-radius: 10px;
`;
export const Button = styled.button`
  background-color: red;
  color: white;
  width: 150px;
  height: 50px;
  border: 1px solid red;
  border-radius: 20px 0px 20px 0px;
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  bottom: 20%;
  right: 30%;
  @media screen and (min-width: 484px){
    bottom: 20%;
    right: 35%;
  }
  @media screen and (min-width: 768px){
    bottom: 20%;
    right: 45%;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #ff3333;
  color: white;
`;
