import styled from 'styled-components';
import CardBg from '../../assets/card-bg.jpg';
import Image from 'next/image';
import ImgEx from '../../assets/map.png';
import Carousel from '../UI/Carousel';

const StyledGreenColumn = styled.div`
    background: url(${CardBg.src});
    border-radius: 16px;
    background-size: cover;
    border: 1px solid rgba(255, 255, 255, 0.29);
`;

const StyledGlassLayer = styled.div`
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.boxShadows.howItWorksCard};
    backdrop-filter: blur(55px);
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(233, 235, 221, 0.17);
`;

const slides = [
    <div className='flex gap-5 flex-col md:flex-row' key={1}>
        <h3 className='basis-[40%] flex text-center text-dark font-quicksand md:border-r-[1px] border-lightText items-center justify-center p-3'>
            1. Search for gardeners nearby you
        </h3>
        <Image
            src={ImgEx}
            className='basis-[60%] w-[400px] h-[350px] rounded-3xl'
            alt='carousel-information-image'
        />
    </div>,
    <div className='flex gap-5' key={2}>
        <h3 className='basis-[40%] flex text-center text-dark font-quicksand border-r-[1px] border-lightText items-center p-3'>
            2. Book an appointment
        </h3>
        <Image
            src={ImgEx}
            className='basis-[60%] w-[400px] h-[350px] rounded-3xl'
            alt='carousel-information-image'
        />
    </div>,
];

const HowItWorks = () => (
    <StyledGreenColumn className='w-full lg:w-[50%] h-[80vh] md:h-[60vh] lg:h-[80vh] lg:relative'>
        <StyledGlassLayer className='flex flex-col gap-8 p-5 md:p-10'>
            <h2 className='text-background'>How It Works</h2>
            <Carousel
                slides={slides}
                className='lg:!hidden w-[90vw] h-full bg-background m-auto rounded-[30px]'
            />
            <Carousel
                slides={slides}
                className='!hidden lg:!block w-[60vw] h-full absolute top-[50%] left-[50%] translate-x-0 -translate-y-[60%] bg-background rounded-[30px]'
            />
        </StyledGlassLayer>
    </StyledGreenColumn>
);

export default HowItWorks;
