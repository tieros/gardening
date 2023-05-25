'use client';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import Text from '@/components/UI/Text';
import Navbar from '@/components/landing-page/Navbar';

const Header = styled.span`
    background-color: ${({ theme }) => theme.colors.green};
`;
const LandingPage = () => (
    <div className='p-10'>
        <h1>Landing Page</h1>
        <Navbar isAuthenticated={true} />
        <Navbar isAuthenticated={false} />
    </div>
);
export default LandingPage;
