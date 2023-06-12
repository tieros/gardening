import styled from 'styled-components';
import Carousel from '../UI/Carousel';
import TestimonialsBg from '../../assets/testimonialsbg.jpg';
const slides = [
    <div className='flex gap-5 flex-col md:flex-row' key={1}>
        <h3 className='text-lightGreen basis-[40%] flex text-center font-quicksand md:border-r-[1px] border-lightText items-center justify-center p-3'>
            1. Search for gardeners nearby you
        </h3>
    </div>,
    <div className='flex gap-5 flex-col md:flex-row' key={1}>
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
    <StyledTestimonialsWrapper className='w-[100vw] h-[80vh] md:h-[50vh] xl:w-[70vw] xl:h-[540px] p-6 absolute right-0 flex md:items-center'>
        <Carousel
            slides={slides}
            className='w-[90vw] h-[70vh] md:h-[40vh] md:w-[65vw] shadow-howItWorksCard backdrop-blur-[55px] rounded-[30px] text-center bg-lightGreen/[.06] md:left-[50%] md:translate-x-[-50%]'
        />
    </StyledTestimonialsWrapper>
);
export default Testimonials;
