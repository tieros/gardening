import styled from 'styled-components';
import Button from '../UI/Button';
import Image from 'next/image';
import HeroImage from '../../assets/heroImage.png';

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    position: relative;
    /* z-index: 99; */
`;

const Hero = () => (
    <>
        <StyledHero className='p-4 md:p-10 mb-[100px]'>
            <h1 className='text-dark'>Find your gardener</h1>
            <p className='text-dark md:w-[50%] backdrop-blur text-lg'>
                We are here nearby you to provide gardening services.We are here
                nearby you to provide gardening services
            </p>
            <div className='flex gap-4'>
                <Button mode='primary'>Search Now</Button>
                <Button mode='white'>Create Account</Button>
            </div>
        </StyledHero>
        <Image
            src={HeroImage}
            alt='green-leaf-image'
            className='absolute right-0 scale-x-[-1] top-0 md:top-[10%] lg:top-[15%] xm:rotate-[40deg] xm:right-[-40%]'
        />
    </>
);
export default Hero;
