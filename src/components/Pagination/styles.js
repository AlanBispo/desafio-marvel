import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;

`
export const Button = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    &:not(:first-child){
        margin-left: 10px;
    }
`
