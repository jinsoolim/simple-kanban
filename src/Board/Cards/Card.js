/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { css } from '@emotion/react';
import CardBoxElement from '../StyledElements/CardBoxElement';
import StyledButton from '../StyledElements/StyledButton';
import { DataContext } from '../../App';
import { ItemTypes } from '../../ItemTypes';
import { useDrag } from 'react-dnd';

export const Card = ({ id, index, description, color, column, cardList, setCardList }) => {
    const [state, setState] = useContext(DataContext);

    const handleDeleteCard = () => {
        const newState = [...state];
        const newColumnInfo = newState[column];
        const cardListCopy = [...cardList];
        const newCardList = cardListCopy.filter((el) => el.id !== id);
        newColumnInfo.cardData = newCardList;
        setCardList(newCardList);
        setState(newState);
    }

    const [, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { id, index, column, cardList, setCardList, handleDeleteCard },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })); 

    return (
        <div >
            <CardBoxElement 
                css={css`
                    background-color: ${color};
                    padding-bottom: 0;
                `}
                ref={drag}
            > 
                <div
                    css={css`
                        overflow: scroll;
                        overflow-wrap: break-word;
                        max-height: 6em;
                        line-height: 1.5;
                    `}
                >
                    <p
                        css={css`
                            text-align: left;
                            font-size: 13px;
                            margin: 0;
                            color: #292929;
                        `}
                    >{description}</p>
                </div>
                <StyledButton 
                    color={"rgba(255, 255, 255, 0)"} 
                    onClick={handleDeleteCard}
                    css={css`
                        border-top: 1px solid darkgrey;
                        margin: auto;
                        padding: 0;
                        width: 100%;
                        box-shadow: none;
                        color: darkgrey;
                        &:hover {
                            color: black;
                            box-shadow: none;
                            border: 1px solid grey;
                            font-weight: 600;
                            font-style: normal;
                        }
                    `}
                >x</StyledButton>
            </CardBoxElement>
        </div>
    );
};