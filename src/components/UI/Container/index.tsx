import styled from 'styled-components';

const StyledContainer = styled.div`
    border-radius: 30px;
`;

const Container = ({ children }: React.PropsWithChildren) => (
    <StyledContainer className='relative shadow-none md:shadow-container bg-background lg:m-5 xm:overflow-hidden'>
        {children}
    </StyledContainer>
);

export default Container;
