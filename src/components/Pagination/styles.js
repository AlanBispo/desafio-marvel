import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    width: 25px;
    height: 25px;

`
export const Button = styled.button`
    border: none;
    cursor: pointer;
    &:not(:first-child){
        margin-left: 10px;
    }
`
