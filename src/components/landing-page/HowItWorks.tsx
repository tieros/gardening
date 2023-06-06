import styled from 'styled-components';
import CardBg from '../../assets/card-bg.jpg';
import Image from 'next/image';
import ImgEx from '../../assets/map.png';
import Carousel from '../UI/Carousel';

const LeftGreenColumn = styled.div`
    background: url(${CardBg.src});
    border-radius: 16px;
    background-size: cover;
    border: 1px solid rgba(255, 255, 255, 0.29);

    .glass-layer {
        box-shadow: ${({ theme }) => theme.boxShadows.howItWorksCard};
        backdrop-filter: blur(55px);
        width: 100%;
        height: 100%;
        text-align: center;
    }
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
    <>
        <div className='hidden lg:inline-block w-[97vw] h-[90vh] absolute left-0'>
            <Carousel
                slides={slides}
                className='w-[700px] lg:w-[920px] h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <div className='flex w-[97vw] h-[90vh] absolute top-0'>
                <LeftGreenColumn className='shadow-howItWorksCard basis-1/2 bg-green rounded-[0px 30px 30px 0px]'>
                    <div className='glass-layer p-10 rounded-[0px 30px 30px 0px] flex justify-center'>
                        <h2 className='text-background'>How It Works</h2>
                    </div>
                </LeftGreenColumn>
                <div className='basis-1/2'></div>
            </div>
        </div>
        <div className='lg:hidden w-[100vw] h-[90vh] md:h-[640px] max-h-[640px]'>
            <LeftGreenColumn className='h-full'>
                <div className='glass-layer p-5'>
                    <h2 className='text-background m-3'>How It Works</h2>
                    <Carousel
                        slides={slides}
                        className='w-[350px] h-[450px] md:-h-[500px] md:w-[80vw] top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3'
                    />
                </div>
            </LeftGreenColumn>
        </div>
    </>
);

export default HowItWorks;
