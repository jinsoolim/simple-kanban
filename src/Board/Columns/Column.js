/** @jsxImportSource @emotion/react */

import { useState, useContext, useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';
import ColumnElement from '../StyledElements/ColumnElement';
import { DataContext } from '../../App';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';
import { SearchContext } from '../../App';


export const ColumnTitle = styled.h1`
    font-size: 16px;
    text-align: center;
    margin-left: 1.2em;
`;

export const ColumnHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    padding: .5em;
`;

export const Column = ({ id, title, cardData, columnIndex }) => {
    const [state, setState] = useContext(DataContext);
    const [searchInput, , filterSearchInput] = useContext(SearchContext);

    const [cardList, setCardList] = useState(cardData);

    const handleDeleteColumn = () => {
        const newState = [...state];
        const newColumnList = newState.filter((el) => el.id !== id);
        setState(newColumnList);
    }

    const cards = useMemo(() => cardList.map((el, index) => <Card key={`${el.column}.${el.id}`} id={el.id} index={index} description={el.description} color={el.color} column={el.column} cardList={cardList} setCardList={setCardList} />), [cardList, setCardList])

    const filteredCards = useMemo(() => {
        console.log("I am running")
        return cards.filter((el) => el.props.description.toLowerCase().includes(filterSearchInput.toLowerCase()));
    }, [filterSearchInput, cards]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            const didDrop = !!monitor.didDrop();
            if (item.column === columnIndex) return;
            const newState = [...state];
            console.log(newState);
            const oldColumnInfo = newState[item.column];
            const cardListCopy = [...oldColumnInfo.cardData];
            const droppedItem = cardListCopy.filter((el) => el.id === item.id)[0];
            const oldCardList = cardListCopy.filter((el) => el.id !== item.id);
            oldColumnInfo.cardData = oldCardList;
            item.setCardList(oldCardList);
            const newColumnInfo = newState[columnIndex];
            const newCardList = [...newColumnInfo.cardData];
            newCardList.push(droppedItem);
            newColumnInfo.cardData = newCardList;
            setCardList(newCardList);
            setState(newState);
            droppedItem.column = columnIndex;
            if (didDrop) {
                return;
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    }), [state]);

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
                                transition: .3s;
                                opacity: 75%;
                                cursor: pointer;
                            }
                            `}
                            >x</div>
                    </ColumnHeaderDiv>
                    <div
                        css={css`
                            text-align: left;
                            color: grey;
                            padding: 1em 1.2em;
                            font-size: 14px;
                            background-color: #eeeeee;
                        `}
                    ><em>Task Count: </em><b>{cardData.length}</b></div>
                    <AddCard cardList={cardList} setCardList={setCardList} columnIndex={columnIndex}/>
                </div>
                {
                    searchInput === '' ? 
                    cards :
                    filteredCards
                }
            </ColumnElement>
        </div>
    );
};