/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';
import ColumnElement from '../StyledElements/ColumnElement';
import { DataContext } from '../../App';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

export const ColumnTitle = styled.h1`
    font-size: 16px;
    text-align: center;
    margin-left: 1.2em;
`;

const ColumnHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    padding: .5em;
`;

export const Column = ({ id, title, cardData, columnIndex }) => {
    const [state, setState] = useContext(DataContext);
    const [cardList, setCardList] = useState(cardData);

    const handleDeleteColumn = () => {
        const newState = [...state];
        const newColumnList = newState.filter((el) => el.id !== id);
        setState(newColumnList);
    }
    
    const cards = cardList.map((el, index) => <Card key={`${el.column}.${el.id}`} id={el.id} index={index} description={el.description} color={el.color} column={el.column} cardList={cardList} setCardList={setCardList} />)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop();
            console.log("column", cardList);
            console.log("draggedItems column", item.cardList);
            const newState = [...state];
            console.log(item.column);
            const droppedItem = newState[item.column].cardData.filter((el) => el.id === item.id)[0];
            console.log(droppedItem);
            droppedItem.column = columnIndex;
            // console.log(droppedItem.column);
            
            //Check if item exists in the same column
                // 

            if (item.column === columnIndex) return;
            //Delete dropped item from previous column
            const previousCardList = [...item.cardList];
            const newPreviousCardList = previousCardList.filter((el) => el.id !== item.id);
            console.log('newPreviousCardList', newPreviousCardList);
            newState[item.column].cardData = newPreviousCardList;
            item.setCardList(newPreviousCardList);
            console.log('newPreviousCardList after set', newPreviousCardList);
            //Add dropped item to the column that it was dropped on
            const newCardList = [...cardList];
            newCardList.push(droppedItem);
            newState[columnIndex].cardData = newCardList;
            console.log('newCardList', newCardList);
            setCardList(newCardList);
            console.log('newCardList after set', newCardList);

            console.log("column after set", cardList);
            console.log("draggedItems column after set", item.cardList);
            console.log(newState);
            setState(newState);
            console.log("column after setState", cardList);
            console.log("draggedItems column after setState", item.cardList);
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
            <ColumnElement 
                ref={drop} 
                css={[
                    isOver === true &&
                        css`
                        opacity: 75%;
                        background-color: grey;
                        `,
                    css`
                        background-color: rgba(255, 255, 255, .5);
                    `
                ]}
            >
                <div
                    css={css`
                        position: sticky;
                        top: 0;
                    `}
                >
                    <ColumnHeaderDiv>
                        <ColumnTitle>{title}</ColumnTitle>
                        <div 
                            onClick={handleDeleteColumn}
                            css={css`
                            padding: 5px;
                            margin-right: .8em;
                            opacity: 25%;
                            &:focus, &:hover {
                                opacity: 75%;
                            }
                            `}
                            >x</div>
                    </ColumnHeaderDiv>
                    <p
                        css={css`
                            text-align: left;
                            margin-left: 1.2em;
                            font-size: 14px;
                        `}
                    ><em>No. of Tasks: </em><b>{cardData.length}</b></p>
                    <AddCard cardList={cardList} setCardList={setCardList} columnIndex={columnIndex}/>
                </div>
                {cards}
            </ColumnElement>
        </div>
    );
};