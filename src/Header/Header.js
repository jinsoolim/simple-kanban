import React from 'react';
import styled from '@emotion/styled';

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(25, 50, 75, .9);
`;
const Title = styled.h1`
    color: green;
`;

export const Header = () => {
    return (
        <NavBar >
            <Title>Simple Kanban Board</Title>
        </NavBar>
    );
};