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
                    background-color: rgba(255, 255, 255, 0.6);
                    height: 5em;
                    display: flex;
                    align-items: center;
                    &:hover,&:focus {
                        transition: .3s;
                        box-shadow: none;
                        cursor: pointer;
                        background-color: rgba(208, 208, 208, 1);
                    }
                `}
                onClick={openModal}
            > 
            {/* <ColumnTitle>Add New List...</ColumnTitle> */}
            <div
                css={css`
                    display: flex;
                    align-items: flex-start;
                    margin-right: 1em;
                `}
            >
                <span
                    css={css`
                        font-size: 1.7em;
                        margin-left: 1.2em;
                    `}
                ><b>+</b></span>
                <ColumnTitle>Add New List...</ColumnTitle>
            </div>
            </ColumnElement>
            <AddColumnModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
        </div>
    );
};