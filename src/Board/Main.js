import React from 'react';
import styled from '@emotion/styled';
import { Column } from './Columns/Column';

const Board = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Main = () => {
    return (
        <Board className="board">
            <Column />
            <Column />
            <Column />
        </Board>
    );
};