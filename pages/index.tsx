'use client';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import Text from '@/components/UI/Text';

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
        <h6 className='text-danger'>Landing Page</h6>
        <p className='text-8xl'>P tag </p>
        <Header className='text-8xl text-pink underline uppercase'>
            Is this Rubik
        </Header>

        <Button onClick={() => console.log()} size='small' mode='secondary'>
            Click Me
        </Button>
        <Button onClick={() => console.log()} size='small' mode='primary'>
            Click Me
        </Button>
        <Text size='small' />
        <Text size='large' />
    </div>
);
export default LandingPage;
