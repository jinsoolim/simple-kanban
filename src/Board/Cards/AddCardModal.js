/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { columnData } from '../../data/columnData';
import { StyledButton } from './StyledButton';

Modal.setAppElement('#root');

const ModalFormItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: space-between;
    margin: 1em;
`;

export const AddCardModal = ({ isOpen, setIsOpen, closeModal, cardList, setCardList, columnIndex }) => {
    const [description, setDescription] = useState('');
    const [cardColor, setCardColor] = useState('#fff');

    const findNextCardId = () => {
        let nextCardId = 0;
        for (let i = 0; i < columnData.length; i+=1) {
            let findCards = columnData[i].cardData;
            for (let j = 0; j < findCards.length; j+=1) {
                if (findCards[j].id >= nextCardId ) nextCardId = findCards[j].id;
            }
        }
        return nextCardId + 1;
    };    

    const validateAddCard = (cardDescription) => {
        if (cardDescription !== '') return true;
        else return false;
    };

    const addCardInfoToCardList = () => {
        if (validateAddCard(description)) {          
            const newCardList = [...cardList];
            newCardList.push({
                id: findNextCardId(),
                type: 'card',
                column: columnIndex,
                description,
                color: cardColor,
            });
            setCardList(newCardList);
            closeModal();
        } else {
            return;
        }
    };

    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleColorChange = (e) => setCardColor(e.target.value);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)} 
            shouldCloseOnOverlayClick={true}
            css={css`
                width: 300px;
                height: 300px;
                position: fixed;
                left: 50%;
                top: 50%; 
                margin-left: -150px;
                margin-top: -150px;
                background-color: white;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
                transition: all ease 1s;
            `}
            >
            <form action="">
                <ModalFormItem>
                    <label>Description: </label>
                    <textarea name="description" maxlength="100" placeholder="Max 100 Characters" value={description} onChange={handleDescriptionChange} required />
                </ModalFormItem>
                <ModalFormItem>
                    <label >Color: </label>
                    <select name="color" value={cardColor} onChange={handleColorChange} >
                        <option value={"#c1e1b9"}>Green</option>
                        <option value={"#a6ccf4"}>Blue</option>
                        <option value={"#f4b9a6"}>Red</option>
                        <option value={"#f4f0a6"}>Yellow</option>
                        <option value={"#fff"}>White</option>
                    </select>
                </ModalFormItem>
                <ModalFormItem>
                    <StyledButton 
                        onClick={addCardInfoToCardList}
                        color={"#a7f4a6"}
                    >
                    Add Card</StyledButton>
                    <StyledButton 
                        onClick={closeModal}
                        color={"#f4b9a6"}
                    >
                    Cancel</StyledButton>
                </ModalFormItem>
            </form>
        </Modal>
    )
};