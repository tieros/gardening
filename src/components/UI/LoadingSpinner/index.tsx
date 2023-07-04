import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoadingSpinner = styled.div`
    border: 4px solid #fff9f9;
    border-top: 4px solid ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${spinAnimation} 1s infinite;
`;

const LoadingSpinner = () => <StyledLoadingSpinner />;

export default LoadingSpinner;
