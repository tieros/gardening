'use client';

import Navbar from '@/components/UI/Navbar';
import Container from '@/components/UI/Container';

import Hero from '@/components/landing-page/Hero';
import HowItWorks from '@/components/landing-page/HowItWorks';
import Services from '@/components/landing-page/Services';
import Testimonials from '@/components/landing-page/Testimonials';
import Footer from '@/components/landing-page/Footer';
export const navElements = [
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
        <Services />
        <Testimonials />
        <Footer />
    </Container>
);
export default LandingPage;
