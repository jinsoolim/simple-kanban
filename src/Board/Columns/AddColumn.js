/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import { AddColumnModal } from '../Modals/AddColumnModal';
import ColumnElement from '../StyledElements/ColumnElement';
import { ColumnTitle } from './Column';


export const AddColumn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <ColumnElement
                css={css`
                    background-color: rgba(255, 255, 255, 0.8);
                    height: 5em;
                    display: flex;
                    align-items: center;
                    &:hover,&:focus {
                        cursor: pointer;
                    }
                `}
                onClick={openModal}
            > 
            <ColumnTitle>Add New List...</ColumnTitle>
            </ColumnElement>
            <AddColumnModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
        </div>
    );
};