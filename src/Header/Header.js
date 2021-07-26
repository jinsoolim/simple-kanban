import React from 'react';
import styled from '@emotion/styled';

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-weight: 350;
    color: white;
    text-shadow: 2px 2px rgba(0, 0, 0, 1);
    letter-spacing: 1.5px;
    margin-top: 1.5em;
`;

export const Header = () => {
    return (
        <NavBar >
            <Title>Simple Kanban Board</Title>
        </NavBar>
    );
};