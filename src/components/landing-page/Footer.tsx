import Link from 'next/link';
import styled from 'styled-components';
import Input from '../UI/Input';
import { useState } from 'react';
import LeafImage from '../../assets/heroImage.png';
import Image from 'next/image';
import Logo from '../Icons/Logo';

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState('');
    return (
        <div className='relative mt-[90vh] md:mt-[60vh] 2xl:mt-[65vh]'>
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

                <div className='grid grid-cols-2 lg:grid-cols-1 md:text-xl text-lg font-rubik gap-[30px] min-w-[300px] md:min-w-[357px]'>
                    <Link href='#'>Home</Link>
                    <Link href='#'>How It Works</Link>
                    <Link href='#'>Services</Link>
                    <Link href='#'>Login</Link>
                </div>
                <div className='inline-block'>
                    <Input
                        value={subscribeEmail}
                        label={
                            <p className='my-5 lg:my-0 lg:mb-5'>Subscribe</p>
                        }
                        onChange={(event) =>
                            setSubscribeEmail(event.target.value)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
