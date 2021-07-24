import React, { useState } from 'react';
import CardBox from './CardBox';
import { AddCardModal } from './AddCardModal';


export const AddCard = ({ cardList, setCardList }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <CardBox id="add-card">
                <h1>Add Card</h1>
                <button onClick={openModal}>+</button>
            </CardBox>
            <AddCardModal isOpen={isOpen} closeModal={closeModal} cardList={cardList} setCardList={setCardList}/>
        </div>
    );
};