import styled from 'styled-components';
import Tag from '../UI/Tag';

const StyledServicesWrapper = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const Services = () => (
    <StyledServicesWrapper className='mt-[6vh] lg:mt-[120vh]'>
        <h2 className='text-dark'>Top Services</h2>
        <p className='text-xl lg:text-3xl max-w-[800px] text-center'>
            Here some of our most requested services, but not limited to...
        </p>
        <div className='grid grid-cols-2 md:auto-cols-auto lg:grid-cols-3 gap-12 mt-3'>
            <Tag label='#fertilization' size='large' />
            <Tag label='#fertilization' size='large' />
            <Tag label='#fertilization' size='large' />
            <Tag label='#fertilization' size='large' />
            <Tag label='#fertilization' size='large' />
            <Tag label='#fertilization' size='large' />
        </div>
    </StyledServicesWrapper>
);
export default Services;
