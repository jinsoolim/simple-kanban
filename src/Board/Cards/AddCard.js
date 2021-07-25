/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import CardBoxElement from './CardBoxElement';
import { AddCardModal } from '../Modals/AddCardModal';
import StyledButton from './StyledButton';

export const AddCard = ({ cardList, setCardList, columnIndex }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div
            css={css`
                position: sticky;
                top: 0;
            `}
        >
            <CardBoxElement color={"#dbdbf3"} id="add-card">
                <h1>Add Card</h1>
                <StyledButton color={"#a7f4a6"} onClick={openModal}>+</StyledButton>
            </CardBoxElement>
            <AddCardModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} cardList={cardList} setCardList={setCardList} columnIndex={columnIndex} />
        </div>
    );
};