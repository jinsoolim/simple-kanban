import { useContext } from 'react';
import styled from '@emotion/styled';
import { Column } from './Columns/Column';
// import { columnData } from '../data/columnData';
import { DataContext } from '../App';
import { AddColumn } from './Columns/AddColumn';

const ColumnList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    overflow: scroll;
`;

export const Board = () => {
    const [state] = useContext(DataContext);
    const columns = state.map((el, index) => <Column title={el.title} key={`${index}.${el.id}`} id={el.id} cardData={el.cardData} columnIndex={index}/>);

    return (
        <ColumnList>
            {
                columns.length > 0 && columns
            }
            <AddColumn/>
        </ColumnList>
    );
};