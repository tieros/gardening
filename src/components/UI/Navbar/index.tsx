import Logo from '@/components/Icons/Logo';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from '@/components/Icons/HamburgerMenuIcon';
import CloseIcon from '@/components/Icons/CloseIcon';

type Props = {
    navElements: {
        label: string;
        link: string;
    }[];
};

const StyledNavbar = styled.nav<{ showMenu: boolean }>`
    flex-direction: ${({ showMenu }) => (showMenu ? 'column' : 'row')};
    padding: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    position: relative;
    z-index: 1;
    border-radius: 30px;
    background: ${({ showMenu, theme }) =>
        showMenu ? theme.colors.background : 'none'};
`;

const StyledNavElement = styled.li`
    list-style: none;
`;

const DesktopMenu = styled.ul`
    background: rgba(241, 241, 237, 0.24);
    border: 1px solid rgba(221, 221, 221, 0.53);
    box-shadow: ${({ theme }) => theme.boxShadows.navbar};
    backdrop-filter: blur(5px);
    border-radius: 30px;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 30px;
`;
const MobileMenu = styled.ul<{ showMenu: boolean }>`
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    gap: 50px;
    padding-left: 15px;

    /* Add styles to fill the whole viewport when menu is open */
    @media (max-width: 639px) {
        display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
        position: relative;
        width: 100vw;
        height: calc(100vh - 70px);
    }
`;
const Navbar = ({ navElements }: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledNavbar
            showMenu={showMenu}
            className='flex w-full justify-between align-center shadow-mobileNavbar md:shadow-none'
        >
            {!showMenu ? (
                <div
                    className='flex cursor-pointer items-center md:hidden'
                    onClick={() => {
                        setShowMenu((prev) => !prev);
                        document.body.classList.add('mobile-menu-open');
                    }}
                >
                    <HamburgerMenu />
                </div>
            ) : (
                <div
                    className='absolute right-0 top-6 bg-background w-[44px] h-[44px] flex items-center'
                    onClick={() => {
                        setShowMenu((prev) => !prev);
                        document.body.classList.remove('mobile-menu-open');
                    }}
                >
                    <CloseIcon />
                </div>
            )}
            <Link href='/'>
                <Logo />
            </Link>

            <DesktopMenu className='gap-[8vw] lg:gap-0 xl:mr-20 lg:min-w-[800px] hidden md:flex'>
                {navElements?.map((element) => (
                    <StyledNavElement
                        key={element.label}
                        className='text-rubik text-xl'
                    >
                        <Link href={element.link}>{element.label}</Link>
                    </StyledNavElement>
                ))}
            </DesktopMenu>

            {showMenu && (
                <MobileMenu showMenu={showMenu}>
                    {navElements?.map((element) => (
                        <StyledNavElement
                            key={element.label}
                            className='text-rubik text-2xl'
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
