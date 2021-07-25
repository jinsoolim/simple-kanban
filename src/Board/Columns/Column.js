/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';
import ColumnElement from './ColumnElement';
import StyledButton from '../Cards/StyledButton';
import { DataContext } from '../../App';
import { useDrop, useDrag } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

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

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop()
            const newState = [...state];
            console.log(item.column);
            const droppedItem = newState[item.column].cardData.filter((el) => el.id === item.id)[0];
            console.log(droppedItem);
            droppedItem.column = columnIndex;

            const newColumnInfo = newState[item.column];
            const cardListCopy = [...item.cardList];
            const newCardList = cardListCopy.filter((el) => el.id !== item.id);
            newColumnInfo.cardData = newCardList;
            item.setCardList(newCardList);

            // const draggedItemOriginData = item.cardList.filter((el) => el.id !== item.id);
            // item.setCardList(draggedItemOriginData);
            newState[columnIndex].cardData.push(droppedItem);
            console.log(newState);
            setState(newState);
            if (didDrop) {
                return;
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    return (
        <div>
            <ColumnHeaderDiv>
                <ColumnTitle>{title}</ColumnTitle>
                <StyledButton onClick={handleDeleteColumn}>X</StyledButton>
            </ColumnHeaderDiv>
            <ColumnElement 
                ref={drop} 
                css={[
                    isOver === true &&
                        css`
                            background-color: grey;
                        `
                ]}
            >
                <AddCard cardList={cardList} setCardList={setCardList} columnIndex={columnIndex}/>
                {cards}
            </ColumnElement>
        </div>
    );
};