/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import { DataContext } from '../../App';
import StyledButton from '../StyledElements/StyledButton';
import ModalFormItem from '../StyledElements/ModalFormItem';

Modal.setAppElement('#root');

export const AddCardModal = ({ isOpen, setIsOpen, closeModal, cardList, setCardList, columnIndex }) => {
    const [state, setState] = useContext(DataContext);
    const [description, setDescription] = useState('');
    const [cardColor, setCardColor] = useState('rgba(255, 255, 255, 0.8)');
    
    const addCardInfoToCardList = () => {
        if (description !== '') {          
            const findNextCardId = () => {
                let nextCardId = 0;
                for (let i = 0; i < state.length; i+=1) {
                    const cards = state[i].cardData;
                    for (let j = 0; j < cards.length; j+=1) {
                        if (cards[j].id >= nextCardId) nextCardId = cards[j].id;
                    }
                }
                return nextCardId + 1;
            };    

            const newState = [...state];
            const newColumnInfo = newState[columnIndex];
            const newCardList = [...cardList];
    
            newCardList.push({
                "id": findNextCardId(),
                "type": 'card',
                "column": columnIndex,
                "description": description,
                "color": cardColor,
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
                width: 500px;
                height: 300px;
                position: fixed;
                left: 50%;
                top: 50%; 
                margin-left: -150px;
                margin-top: -150px;
                background-color: white;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
            `}
            >
            <form>
                <ModalFormItem>
                    <label>New Task: </label>
                    <textarea 
                        cols="50"
                        rows="2"
                        name="description" 
                        maxLength="250" 
                        placeholder="Add Description..." 
                        value={description} 
                        onChange={handleDescriptionChange}
                        css={css`
                            height: 3.5em;
                            width: 100%;
                            margin: 1em 0 .3em;
                            font-family: Arial;
                            font-size: 12px;
                        `}
                        required />
                    <span
                        css={css`
                            font-size: 12px;
                            text-align: right;
                            color: gray;
                        `}
                    >Max Characters: 250</span>
                </ModalFormItem>
                <ModalFormItem>
                    <label >Color: </label>
                    <select 
                        name="color" 
                        onChange={handleColorChange} 
                        css={css`
                            width: 15em;
                            margin: 1em 0 .3em;
                            display: flex;
                            flex-direction: column;                            
                        `}
                    >
                            <option name="color" value={"rgba(255, 255, 255, 0.8)"} onChange={handleColorChange}>White (default)</option>
                            <option name="color" value={"rgba(244, 240, 166, 0.8)"} onChange={handleColorChange}>Yellow</option>
                            <option name="color" value={"rgba(193, 225, 185, 0.8)"} onChange={handleColorChange}>Green</option>
                            <option name="color" value={"rgba(166, 204, 244, 0.8)"} onChange={handleColorChange}>Blue</option>
                            <option name="color" value={"rgba(244, 185, 166, 0.8)"} onChange={handleColorChange}>Red</option>
                    </select>
                </ModalFormItem>
                <div>

                    <StyledButton 
                        onClick={addCardInfoToCardList}
                        color={"#3278e8"}
                        css={css`
                        color: white;
                        `}
                        >
                    Create</StyledButton>
                    <StyledButton 
                        onClick={() => {closeModal(); setDescription(''); setCardColor('rgba(255, 255, 255, 0.8)')}}
                        color={"#e0e0e0"}
                        >
                    Cancel</StyledButton>
                </div>
            </form>
        </Modal>
    );
};