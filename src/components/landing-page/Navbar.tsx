import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../Icons/Logo';

type Props = {
    isAuthenticated: boolean;
};

const StyledNavbarContainer = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const StyledNavbar = styled.nav`
    background: rgba(241, 241, 237, 0.24);
    border: 1px solid rgba(221, 221, 221, 0.53);
    box-shadow: -20px -20px 20px rgba(255, 255, 255, 0.38),
        20px 20px 20px rgba(224, 224, 215, 0.45);
    backdrop-filter: blur(5px);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-width: 800px;
    list-style: none;
`;

const StyledNavElement = styled.li`
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
`;

const Navbar = ({ isAuthenticated }: Props) => {
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
    const isMobile = false;
    return (
        <StyledNavbarContainer>
            {!isMobile && (
                <div>
                    <Link href='/'>
                        <Logo />
                    </Link>
                </div>
            )}

            <StyledNavbar>
                {isMobile && !mobileNavbarOpen ? (
                    <>
                        <p>=</p>
                        <div>
                            <Link href='/'>
                                <Logo />
                            </Link>
                        </div>
                    </>
                ) : isAuthenticated ? (
                    <>
                        <StyledNavElement>
                            <Link href='/find'>Find a Gardener</Link>
                        </StyledNavElement>
                        <StyledNavElement>
                            <Link href='/appointments'>My Appointments</Link>
                        </StyledNavElement>
                        <StyledNavElement>
                            <Link href='/account'>Account</Link>
                        </StyledNavElement>
                    </>
                ) : (
                    <>
                        <StyledNavElement>
                            <Link href='#howItWorks'>How It Works</Link>
                        </StyledNavElement>
                        <StyledNavElement>
                            <Link href='#services'>Services</Link>
                        </StyledNavElement>
                        <StyledNavElement>
                            <Link href='#testimonials'>Testimonials</Link>
                        </StyledNavElement>
                        <StyledNavElement>
                            <Link href='/login'>Login</Link>
                        </StyledNavElement>
                    </>
                )}
            </StyledNavbar>
        </StyledNavbarContainer>
    );
};

export default Navbar;
