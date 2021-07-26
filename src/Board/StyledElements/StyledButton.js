import styled from '@emotion/styled';

export default styled.button`
    width: 5.78em;
    border-radius: 2px;
    padding: .7em;
    margin: .5em;
    border: 0px solid #000001;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    &:hover,&:focus {
        cursor: pointer;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    }
    background-color: ${props => props.color};
`;