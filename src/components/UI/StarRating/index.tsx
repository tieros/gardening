import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';

type Props = {
    rating?: number;
    readOnly?: boolean;
    onSaveRating?: (val: number) => void;
};

const StyledRating = styled(Rating)`
    .star-svg {
        width: 20px;
        height: 20px;
    }
`;

const StarRating = ({ rating, readOnly = false, onSaveRating }: Props) => {
    return (
        <StyledRating
            iconsCount={5}
            readonly={readOnly}
            initialValue={rating}
            emptyStyle={{ display: 'flex' }}
            fillStyle={{ display: '-webkit-inline-box' }}
            onClick={onSaveRating}
            allowFraction
        />
    );
};

export default StarRating;
