import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';
import ColumnElement from './ColumnElement';
import StyledButton from '../Cards/StyledButton';
import { DataContext } from '../../App';

const ColumnTitle = styled.h1`
    text-align: center;
`;

const ColumnHeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Column = ({ id, title, cardData, columnIndex }) => {
    const [state, setState] = useContext(DataContext);
    const [cardList, setCardList] = useState(cardData);

    const handleDeleteColumn = () => {
        const newState = [...state];
        const newColumnList = newState.filter((el) => el.id !== id);
        setState(newColumnList);
    }
    
    const cards = cardList.map((el) => <Card key={`${el.column}.${el.id}`} id={el.id} description={el.description} color={el.color} column={el.column} cardList={cardList} setCardList={setCardList} />)

    return (
        <div>
            <ColumnHeaderDiv>
                <ColumnTitle>{title}</ColumnTitle>
                <StyledButton onClick={handleDeleteColumn}>X</StyledButton>
            </ColumnHeaderDiv>
            <ColumnElement>
                <AddCard cardList={cardList} setCardList={setCardList} columnIndex={columnIndex}/>
                {cards}
            </ColumnElement>
        </div>
    );
};