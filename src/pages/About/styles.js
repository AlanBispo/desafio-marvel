import styled from "styled-components";

export const ContainerAbout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 95%;
  background-color: #f7a6a6;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 90%;
  }
  
`
export const TitleAbout = styled.h1`
  font-size: 1.4rem;
  margin: 20px 0px;
`;
export const TextAbout = styled.span`
  width: 80%;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.5;
  align-items: center;
  text-align: justify;
  padding-bottom: 10px;
`;
