import React from 'react';
import Navbar from '../UI/Navbar';

const navElements = [
    { label: 'Find Gardener', link: '/account' },
    { label: 'Profile', link: '/account/profile' },
    { label: 'My Appointments', link: '/account/my-appointments' },
];

type Props = {
    children: React.ReactNode;
};

const AccountLayout = ({ children }: Props) => {
    return (
        <div className='bg-background w-full h-[100vh] lg:overflow-hidden'>
            <Navbar
                navElements={navElements}
                customStyle='!justify-center !gap-10'
            />
            {children}
        </div>
    );
};
export default AccountLayout;
