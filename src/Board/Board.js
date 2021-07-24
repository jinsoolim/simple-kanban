import React from 'react';
import styled from '@emotion/styled';
import { Column } from './Columns/Column';
import { columnData } from '../data/columnData';

const ColumnList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Board = () => {
    
    const columns = columnData.map((el) => <Column title={el.title} key={el.id} cardData={el.cardData} />);
    return (
        <ColumnList className="column-list">
            {columns}
        </ColumnList>
    );
};