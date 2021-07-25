/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import CardBoxElement from './CardBoxElement';
import StyledButton from './StyledButton';
import { DataContext } from '../../App';

export const Card = ({ id, description, color, column, cardList, setCardList }) => {
    const [state, setState] = useContext(DataContext);
    const handleDeleteCard = () => {
        const newState = [...state];
        const newColumnInfo = newState[column];
        const cardListCopy = [...cardList];
        const newCardList = cardListCopy.filter((el) => el.id !== id);
        newColumnInfo.cardData = newCardList;
        setCardList(newCardList);
        setState(newState);
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