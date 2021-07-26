import React from 'react';
import styled from '@emotion/styled';

const FooterDiv = styled.div`
    position: fixed;
    margin: auto;
    bottom: 0;
    width: 100%;
    text-align: center;
`;
const Title = styled.p`
    color: black;
`;

export const Footer = () => {
    return (
        <FooterDiv >
            <Title>@jinsoolim</Title>
        </FooterDiv>
    );
};