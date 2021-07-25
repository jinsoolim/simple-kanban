import styled from '@emotion/styled';

export default styled.div`
    border: 1px solid black;
    text-align: center;
    max-height: 10em;
    width: 20em;
    margin: 1em;
    padding: .5em;
    overflow: scroll;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    &:hover,&:focus {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    }
`;