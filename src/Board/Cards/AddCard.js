/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import CardBoxElement from '../StyledElements/CardBoxElement';
import { AddCardModal } from '../Modals/AddCardModal';

export const AddCard = ({ cardList, setCardList, columnIndex }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <CardBoxElement  
                css={[
                    css`
                    width: 100%;
                    border-bottom: none;
                    margin: 0;
                    border-radius: 0px;
                    box-shadow: none;
                    background-color: rgba(208, 208, 208, .5);
                    &:hover,&:focus {
                        box-shadow: none;
                        cursor: pointer;
                        background-color: rgba(208, 208, 208, 1);
                    }
                `,
                    cardList.length > 0 && 
                    css`
                        box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
                        border-bottom: 0px solid darkgrey;
                    `
                ]}
                onClick={openModal}
            >
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-right: 1em;
                    `}
                >
                    <p
                        css={css`
                            font-size: 14px;
                            display: flex;
                            align-self: flex-start;
                            margin-left: .7em;
                        `}
                    >Add New Task...</p>
                    <span><b>+</b></span>
                </div>
            </CardBoxElement>
            <AddCardModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} cardList={cardList} setCardList={setCardList} columnIndex={columnIndex} />
        </div>
    );
};