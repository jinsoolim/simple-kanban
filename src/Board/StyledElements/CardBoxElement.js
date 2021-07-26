import styled from '@emotion/styled';

export default styled.div`
    border: 0px solid black;
    text-align: center;
    max-height: 7em;
    width: 16.7em;
    border-radius: 1.5px;
    margin: 1em auto;
    padding: .5em;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    background-color: ${props => props.color};
    &:hover,&:focus {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`;