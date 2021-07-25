/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import CardBoxElement from './CardBoxElement';
import { StyledButton } from './StyledButton';

export const Card = ({ id, description, color, column, cardList, setCardList }) => {
    const handleDeleteCard = () => {
        const cardListCopy = [...cardList];
        const newCardList = cardListCopy.filter((el) => el.id !== id);
        setCardList(newCardList);
    }
    return (
        <div>
            <CardBoxElement 
                css={css`
                    background-color: ${color};
                `} 
            > 
                <h1>{description}</h1>
            <StyledButton color={"#f4b9a6"} onClick={handleDeleteCard}>-</StyledButton>
            </CardBoxElement>
        </div>
    );
};