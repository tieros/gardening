import styled from 'styled-components';
import Carousel from '../UI/Carousel';
import TestimonialsBg from '../../assets/testimonialsbg.jpg';

const slides = [
    <div className='flex gap-5 flex-col' key={1}>
        <h2 className='text-lightGreen'>They say that...</h2>
        <div className='flex flex-col items-center'>
            <span className='text-[60px] text-lightGreen self-start'>
                &quot;
            </span>
            <p className='text-lg md:text-3xl text-lightGreen font-quicksand md:w-[60%]'>
                I ordered mowing service from @HenryBarrel. Everything went so
                nice and smooth, including fair pricing.
            </p>
            <span className='text-[60px] text-lightGreen self-end'>&quot;</span>
        </div>
    </div>,
    <div className='flex gap-5 flex-col' key={2}>
        <h3 className='basis-[40%] flex text-center text-dark font-quicksand md:border-r-[1px] border-lightText items-center justify-center p-3'>
            1. Search for gardeners nearby you
        </h3>
    </div>,
];

const StyledTestimonialsWrapper = styled.div`
    background: url(${TestimonialsBg.src});
    background-size: cover;
    border-radius: 30px 0 0 30px;
`;

const Testimonials = () => (
    <div className='flex justify-end '>
        <StyledTestimonialsWrapper className='mb-20 w-[100vw] h-[60vh] lg:w-[70vw] lg:h-[75vh] lg:p-6 flex md:items-center'>
            <Carousel
                arrows={false}
                slides={slides}
                className='p-5 w-full h-full shadow-howItWorksCard backdrop-blur-[55px] rounded-none lg:rounded-[30px] text-center bg-lightGreen/[.06] md:left-[50%] md:translate-x-[-50%]'
            />
        </StyledTestimonialsWrapper>
    </div>
);
export default Testimonials;
