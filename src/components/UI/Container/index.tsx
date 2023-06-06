import styled from 'styled-components';

const StyledContainer = styled.div`
    border-radius: 30px;
`;

const Container = ({ children }: React.PropsWithChildren) => (
    <StyledContainer className='shadow-none md:shadow-container md:p-5 bg-background relative lg:m-5 xm:overflow-hidden'>
        {children}
    </StyledContainer>
);

export default Container;
