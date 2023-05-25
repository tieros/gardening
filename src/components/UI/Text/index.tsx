import styled from 'styled-components';

type Props = {
    size: 'small' | 'large';
};

const StyledSpan = styled.span<{ size: 'small' | 'large' }>`
    font-size: ${({ size }) => (size === 'small' ? '18px' : '64px')};
`;
const Text = ({ size }: Props) => (
    <>
        <span className='p-20 m-11 underline text-green'>Tailwind</span>
        <StyledSpan size={size} className='p-20 m-11 underline'>
            Hebe
        </StyledSpan>
    </>
);
export default Text;
