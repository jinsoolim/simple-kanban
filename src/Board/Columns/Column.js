import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';
import { Card } from '../Cards/Card';

const CardHolder = styled.div`
    border: 1px solid black;
    margin: 1em;
`;

const TitleOfCardHolder = styled.h1`
    text-align: center;
`;

export const Column = ({ title, cardData}) => {
    const [cardList, setCardList] = useState(cardData);
    console.log(cardList);
    const cards = cardList.map((el) => <Card key={el.id} description={el.description} color={el.color} column={el.column} />)

    return (
        <div>
            <TitleOfCardHolder>{title}</TitleOfCardHolder>
            <CardHolder>
                <AddCard cardList={cardList} setCardList={setCardList} />
                {cards}
            </CardHolder>
        </div>
    );
};