'use client';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import Navbar from '@/components/UI/Navbar';
import Container from '@/components/UI/Container';
import Image from 'next/image';
import HeroImage from '../src/assets/heroImage.png';
import HowItWorks from '@/components/landing-page/HowItWorks';
import Hero from '@/components/landing-page/Hero';

const navElements = [
    { label: 'How It Works', link: '#howitworks' },
    { label: 'Services', link: '#services' },
    { label: 'Testimonials', link: '#testimonials' },
    { label: 'Login', link: '/login' },
];

const LandingPage = () => (
    <Container>
        <Navbar navElements={navElements} />
        <Hero />
        <HowItWorks />
        <div className='mt-[90vh]'>
            <h2>TO BE CONTINUE</h2>
        </div>
    </Container>
);
export default LandingPage;
