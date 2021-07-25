import React from 'react';
import styled from '@emotion/styled';

const FooterDiv = styled.div`
    position: relative;
    margin: auto;
    bottom: 0;
    width: 100%;
    background-color: lightblue;
    text-align: center;
    overflow: hidden;
`;
const Title = styled.h1`
    color: blue;
`;

export const Footer = () => {
    return (
        <FooterDiv >
            <Title>Footer</Title>
        </FooterDiv>
    );
};