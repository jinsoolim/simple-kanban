import React from 'react';
import styled from '@emotion/styled';
import { Column } from './Columns/Column';
import { columnData } from '../data/columnData';

const ColumnList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10em;
    max-width: 100%;
    overflow: scroll;
`;

export const Board = () => {

    const columns = columnData.map((el, index) => <Column title={el.title} key={el.id} cardData={el.cardData} columnIndex={index}/>);
    return (
        <ColumnList className="column-list">
            {columns}
        </ColumnList>
    );
};