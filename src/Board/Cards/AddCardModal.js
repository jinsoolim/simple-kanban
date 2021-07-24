import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export const AddCardModal = ({ isOpen, closeModal, cardList, setCardList  }) => {
    const [cardDescription, setCardDescription] = useState('');
    const [selectColumn, setSelectColumn] = useState('Select');

    const [cardInfo, setCardInfo] = useState({});

    const addCardInfoToCardList = () => {
        setCardInfo({
            id: 1,
            cardDescription,
            selectColumn
        })
        const newCardList = [...cardList];
        newCardList.push(cardInfo);
        setCardList(newCardList);
    }

    const handleCardDescriptionChange = (e) => setCardDescription(e.target.value);
    const handleSelectColumnChange = (e) => {
        console.log('Before', selectColumn)
        setSelectColumn(e.target.value);
        console.log('After', selectColumn)
    }

    return (
        <Modal
            isOpen={isOpen}
            >
            <div>
                <label>Description: </label>
                <input type="text" value={cardDescription} onChange={handleCardDescriptionChange} />
            </div>
            <div>
                <label >Column: </label>
                <select value={selectColumn} onChange={handleSelectColumnChange}>
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            {/* <div>
                <label for="description">Description</label>
                <input type="text"/>
            </div> */}
            <button onClick={addCardInfoToCardList}>Add Card</button>
            <button onClick={closeModal}>X</button>
        </Modal>
    )
};