/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import { DataContext } from '../../App';
import StyledButton from '../Cards/StyledButton';
import ModalFormItem from './ModalFormItem';

Modal.setAppElement('#root');


export const AddColumnModal = ({ isOpen, setIsOpen, closeModal }) => {
    const [state, setState] = useContext(DataContext);
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);

    const addColumnInfoToState = (e) => {
        if (title !== '') {
            const findNextColumnId = () => {
                let nextColumnId = 0;
                if (state.length === 0) return 1;
                for (let i = 0; i < state.length; i+=1) {
                    if (state[i].id >= nextColumnId) nextColumnId = state[i].id;
                }
                return nextColumnId + 1;
            }

            const newState = [...state];
            const columnInfo = {
                id: findNextColumnId(),
                title,
                type: "column",
                cardData: [],
            }
            newState.push(columnInfo);
            setState(newState);
            setTitle('');
            closeModal();
        } else {
            return;
        }
    };

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
            <form action="" onSubmit={addColumnInfoToState}>
                <ModalFormItem>
                    <label>Title: </label>
                    <input name="title" maxLength="25" placeholder="Max 25 Characters" value={title} onChange={handleTitleChange} required />
                </ModalFormItem>
                <ModalFormItem>
                    <StyledButton 
                        type="submit"
                        onClick={addColumnInfoToState}
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