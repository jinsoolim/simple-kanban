import styled from '@emotion/styled';

export default styled.ul`
    text-align: center;
    width: 18em;
    border: 1px solid black;
    margin: 1em;
    list-style-type: none;
    padding: 1em;
    border-radius: 10px;
    background-color: #e0e0e0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    max-height: 38em;
    overflow: scroll;
    &:hover,&:focus {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`;