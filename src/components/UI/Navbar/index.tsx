import Logo from '@/components/Icons/Logo';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

type Props = {
    navElements: {
        label: string;
        link: string;
    }[];
};

const StyledNavbar = styled.nav`
    padding: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    position: relative;
    z-index: 1;
    border-radius: 30px;
`;

const StyledNavElement = styled.li`
    list-style: none;
`;

const HamburgerIcon = styled.div`
    cursor: pointer;
    font-size: 1.5rem;

    @media (min-width: 640px) {
        display: none;
    }
`;

const DesktopMenu = styled.ul`
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

    @media (max-width: 639px) {
        display: none;
    }
`;
const MobileMenu = styled.ul<{ showMenu: boolean }>`
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    gap: 30px;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 20px;

    /* Add styles to fill the whole viewport when menu is open */
    @media (max-width: 639px) {
        display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
        position: fixed;
        width: 100vw;
        height: 100vh;
        padding: 0;
        overflow: hidden;
        z-index: 9999;
    }
`;
const Navbar = ({ navElements }: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledNavbar className='flex w-full justify-between align-center xm:shadow-2xl sm:shadow-none xm:m-1 sm:m-0'>
            <HamburgerIcon
                onClick={() => {
                    setShowMenu((prev) => !prev);
                    document.body.classList.add('mobile-menu-open');
                }}
            >
                o
            </HamburgerIcon>
            <Link href='/'>
                <Logo />
            </Link>

            <DesktopMenu className='gap-7 lg:gap-0 lg:mr-20 lg:min-w-[800px]'>
                {navElements?.map((element) => (
                    <StyledNavElement
                        key={element.label}
                        className='text-rubik text-lg lg:text-xl'
                    >
                        <Link href={element.link}>{element.label}</Link>
                    </StyledNavElement>
                ))}
            </DesktopMenu>
            {showMenu && (
                <MobileMenu showMenu={showMenu}>
                    <div className='flex justify-between p-5 absolute top-0 w-full'>
                        <Link href='/'>
                            <Logo />
                        </Link>
                        <div
                            onClick={() => {
                                setShowMenu((prev) => !prev);
                                document.body.classList.remove(
                                    'mobile-menu-open',
                                );
                            }}
                        >
                            x
                        </div>
                    </div>
                    {navElements?.map((element) => (
                        <StyledNavElement
                            key={element.label}
                            className='text-rubik text-lg'
                        >
                            <Link href={element.link}>{element.label}</Link>
                        </StyledNavElement>
                    ))}
                </MobileMenu>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
