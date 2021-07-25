import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';

const CardHolder = styled.ul`
    border: 1px solid black;
    margin: 1em;
    list-style-type: none;
    padding: 0;
    background-color: #abdee4;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    max-height: 40em;
    overflow: scroll;
`;

const ColumnTitle = styled.h1`
    text-align: center;
`;

export const Column = ({ title, cardData, columnIndex }) => {
    const [cardList, setCardList] = useState(cardData);
    const cards = cardList.map((el) => <Card key={`${el.column}.${el.id}`} id={el.id} description={el.description} color={el.color} column={el.column} cardList={cardList} setCardList={setCardList} />)

    return (
        <div>
            <ColumnTitle>{title}</ColumnTitle>
            <CardHolder>
                <AddCard cardList={cardList} setCardList={setCardList} columnIndex={columnIndex}/>
                {cards}
            </CardHolder>
        </div>
    );
};