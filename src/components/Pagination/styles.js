import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  background-color: transparent;
  width: 15px;
  height: 15px;
  border: none;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
