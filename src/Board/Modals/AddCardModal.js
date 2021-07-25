/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import { DataContext } from '../../App';
import StyledButton from '../Cards/StyledButton';
import ModalFormItem from './ModalFormItem';

Modal.setAppElement('#root');

export const AddCardModal = ({ isOpen, setIsOpen, closeModal, cardList, setCardList, columnIndex }) => {
    const [state, setState] = useContext(DataContext);
    const [description, setDescription] = useState('');
    const [cardColor, setCardColor] = useState('#fff');
    
    const addCardInfoToCardList = () => {
        if (description !== '') {          
            const findNextCardId = () => {
                let nextCardId = 0;
                const cards = state[columnIndex].cardData;
                if (cards.length === 0) return 1;
                for (let i = 0; i < state[columnIndex].cardData.length; i+=1) {
                    if (cards[i].id >= nextCardId) nextCardId = cards[i].id;
                }
                return nextCardId + 1;
            };    

            const newState = [...state];
            const newColumnInfo = newState[columnIndex];
            const newCardList = [...cardList];
    
            newCardList.push({
                id: findNextCardId(),
                type: 'card',
                column: columnIndex,
                description,
                color: cardColor,
            });
            newColumnInfo.cardData = newCardList;
            setCardList(newCardList);
            setState(newState);
            setDescription('');
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
            `}
            >
            <form action="">
                <ModalFormItem>
                    <label>Description: </label>
                    <textarea name="description" maxLength="100" placeholder="Max 100 Characters" value={description} onChange={handleDescriptionChange} required />
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
    );
};