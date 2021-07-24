import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { AddCard } from '../Cards/AddCard';

const CardHolder = styled.div`
    border: 1px solid black;
    margin: 1em;
`;

const TitleOfCardHolder = styled.h1`
    text-align: center;
`;

export const Column = () => {
    const [cardList, setCardList] = useState([]);

    return (
        <div>
            <TitleOfCardHolder>Title</TitleOfCardHolder>
            <CardHolder>
                <AddCard setCardList={setCardList} />
                {cardList}
            </CardHolder>
        </div>
    );
};