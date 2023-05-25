import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.boxShadows.container};
    border-radius: 30px;
`;

const Container = ({ children }: React.PropsWithChildren) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;
