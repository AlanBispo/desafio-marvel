import styled from "styled-components";

export const Container = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1e1;
  color: black;
`;
export const Body = styled.section`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Img = styled.img`
  height: 200px;
  width: 300px;
`;
export const Box = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  flex-wrap: wrap;
  border: 1px solid transparent;
  border-radius: 10px;
`;
export const Title = styled.h1`
  color: red;
  font-size: 1.8rem;
  margin-top: 30px;
`;
export const Subtitle = styled.h2`
  color: red;
  font-size: 1.2rem;
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
  background-color: #1e1e1e;
  color: white;
`;
