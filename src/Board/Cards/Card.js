import React from 'react';
import styled from '@emotion/styled';
import CardBox from './CardBox';

export const Card = ({ description, color, column }) => {
    return (
        <CardBox styles={{ color }} className="card-box"> 
            <h1>{description}</h1>
            <h1>{column}</h1>
        </CardBox>
    );
};