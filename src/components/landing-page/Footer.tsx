import Link from 'next/link';
import styled from 'styled-components';
import Input from '../UI/Input';
import { useState } from 'react';
import LeafImage from '../../assets/heroImage.png';
import Image from 'next/image';
import Logo from '../Icons/Logo';
import InstagramIcon from '../Icons/InstagramIcon';
import YoutubeIcon from '../Icons/YoutubeIcon';
import TwitterIcon from '../Icons/TwitterIcon';

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState('');
    return (
        <div className='relative'>
            <Image
                width={518}
                height={355}
                src={LeafImage}
                alt='leaf-image'
                className='absolute top-[-10%] right-[-50%] md:right-[-40%] lg:right-[-10%]  md:bottom-0 rotate-[250deg]'
            />
            <div className='m-5 items-center lg:items-start justify-evenly px-[15vw] py-10 gap-8 lg:gap-5 flex-col lg:flex-row relative shadow-footer backdrop-blur-[55px] flex rounded-[30px] bg-lightGreen/[.06]'>
                <div className='md:absolute top-[5%] left-[2%] self-end'>
                    <Logo />
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-1 md:text-xl text-lg text-dark font-rubik gap-[30px] min-w-[300px] md:min-w-[357px]'>
                    <Link href='#'>Home</Link>
                    <Link href='#'>How It Works</Link>
                    <Link href='#'>Services</Link>
                    <Link href='#'>Login</Link>
                </div>
                <div className='inline-block'>
                    <Input
                        value={subscribeEmail}
                        label={
                            <p className='my-5 lg:my-0 lg:mb-5 text-pink font-semibold text-lg'>
                                Subscribe
                            </p>
                        }
                        onChange={(event) =>
                            setSubscribeEmail(event.target.value)
                        }
                    />
                    <div className='flex gap-3 mt-7'>
                        <InstagramIcon />
                        <YoutubeIcon />
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
