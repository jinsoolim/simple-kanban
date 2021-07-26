/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { css } from '@emotion/react';
import { DataContext } from '../../App';
import StyledButton from '../StyledElements/StyledButton';
import ModalFormItem from '../StyledElements/ModalFormItem';

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
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
            `}
            >
            <form>
                <ModalFormItem
                >
                    <label>Title: </label>
                    <input 
                        name="title" 
                        maxLength="25" 
                        placeholder="Add a new title..." 
                        value={title} 
                        onChange={handleTitleChange} 
                        css={css`
                            height: 2.5em;
                            width: 100%;
                            margin: 1em 0 .3em;
                        `}
                        required />
                    <span
                        css={css`
                            font-size: 12px;
                            text-align: right;
                            color: gray;
                        `}
                    >Max Characters: 25</span>
                </ModalFormItem>
                <div>
                    <StyledButton 
                        onClick={addColumnInfoToState}
                        color={"#3278e8"}
                        css={css`
                            color: white;
                        `}
                    >
                    Create</StyledButton>
                    <StyledButton 
                        onClick={closeModal}
                        color={"#e0e0e0"}
                    >
                    Cancel</StyledButton>
                </div>
            </form>
        </Modal>
    );
};