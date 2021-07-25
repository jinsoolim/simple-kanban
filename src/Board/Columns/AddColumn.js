/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import { AddColumnModal } from '../Modals/AddColumnModal';
import ColumnElement from './ColumnElement';

export const AddColumn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <ColumnElement
                css={css`
                border: 1px dotted black;
                &:hover,&:focus {
                    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, .5);
                    cursor: pointer;
                }
                `}
                onClick={openModal}
                > 
            <h1>+ Add Column</h1>
            </ColumnElement>
            <AddColumnModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
        </div>
    );
};