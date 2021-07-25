import styled from '@emotion/styled';

export default styled.button`
    width: 5.78em;
    heigth: 2em;
    border-radius: 5px;
    padding: .7em;
    margin: .5em;
    border: 1px solid #000001;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover,&:focus {
        box-shadow: inset 0px 0px 6px rgba(0, 0, 0, .5);
        cursor: pointer;
    }
    background-color: ${props => props.color};
`;