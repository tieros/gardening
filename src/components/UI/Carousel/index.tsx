import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const StyledSwiper = styled(Swiper)`
    box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25),
        inset 2px 2px 4px rgba(0, 0, 0, 0.25);

    .swiper-button-next,
    .swiper-button-prev {
        color: ${({ theme }) => theme.colors.pink};
    }
    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.pink};
    }
    .swiper-button-disabled {
        display: none;
    }
    .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
    }
    .swiper-slide {
        padding: 40px;
        display: flex;
        align-items: center;
    }
`;

type Props = {
    slides: React.ReactNode[];
    className?: string;
    arrows?: boolean;
};
const Carousel = ({ slides, className, arrows = true }: Props) => (
    <StyledSwiper
        cssMode={true}
        navigation={arrows}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`${className}`}
    >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
    </StyledSwiper>
);
export default Carousel;
