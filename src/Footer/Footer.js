/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FooterDiv = styled.div`
    position: fixed;
    margin: auto;
    bottom: 0;
    width: 100%;
    text-align: center;
`;


export const Footer = () => {
    return (
        <FooterDiv >
            <a 
                css={css`
                    color: black;
                    text-decoration: none;
                    &:hover {
                        transition: .3s;
                        color: white;
                        text-decoration: underline;
                    }
                `} 
                target="_blank"
                href="https://github.com/jinsoolim/simple-kanban"
            >
                <p>Simple Kanban Board by @jinsoolim</p>
            </a>
        </FooterDiv>
    );
};