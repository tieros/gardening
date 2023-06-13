import styled from 'styled-components';
import Button from '../UI/Button';
import Image from 'next/image';
import HeroImage from '../../assets/heroImage.png';
import BackgroundClipImage from '../../assets/testimonialsbg.jpg';

const StyledHeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    position: relative;
    z-index: 1;

    .custom-text {
        background: linear-gradient(to right, #54443f, transparent),
            url(${BackgroundClipImage.src});
        background-size: cover;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
`;

const Hero = () => {
    return (
        <>
            <StyledHeroWrapper className='p-4 md:p-10 mb-[100px]'>
                <h1 className='text-dark'>
                    Find your{' '}
                    <span className='custom-text text-5xl md:text-6xl lg:text-7xl font-semibold font-rubik'>
                        gardener
                    </span>
                </h1>
                <p className='text-dark md:w-[50%] backdrop-blur text-lg'>
                    We are here nearby you to provide gardening services.We are
                    here nearby you to provide gardening services
                </p>
                <div className='flex gap-4'>
                    <Button mode='primary'>Search Now</Button>
                    <Button mode='white'>Create Account</Button>
                </div>
            </StyledHeroWrapper>
            <Image
                src={HeroImage}
                alt='green-leaf-image'
                className='absolute xl:right-0 md:right-[-15%] scale-x-[-1] top-0 md:top-[5%] rotate-[40deg] xl:rotate-0 right-[-40%] z-0'
            />
        </>
    );
};
export default Hero;
