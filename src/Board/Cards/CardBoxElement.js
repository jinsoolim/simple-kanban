import styled from '@emotion/styled';

export default styled.div`
    border: 1px solid black;
    text-align: center;
    max-height: 10em;
    width: 15em;
    border-radius: 10px;
    margin: auto;
    padding: .5em;
    overflow: scroll;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    background-color: ${props => props.color};
    &:hover,&:focus {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
`;