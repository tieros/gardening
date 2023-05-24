'use client';
import Button from '@/components/UI/Button';
import styled from 'styled-components';

const Header = styled.span`
    background-color: ${({ theme }) => theme.colors.green};
`;
const LandingPage = () => (
    <div>
        <h1>Landing Page</h1>
        <h2 className='font-rubik'>Landing Page</h2>
        <h3 className='font-rubik'>Landing Page</h3>
        <h4 className='font-rubik'>Landing Page</h4>
        <h5 className='font-rubik'>Landing Page</h5>
        <h6 className='font-rubik'>Landing Page</h6>
        <p className='text-8xl'>P tag </p>
        <Header className='text-8xl text-accent'>Is this Rubik</Header>

        <Button onClick={() => console.log()} size='small' mode='green'>
            Click Me
        </Button>
    </div>
);
export default LandingPage;
