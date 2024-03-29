type Props = {
    width?: number;
    height?: number;
};
const FilterIcon = ({ width, height }: Props) => (
    <svg
        width={width || '30px'}
        height={height || '30px'}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M1.5 6H16'
            stroke='#71717A'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M8 18H22.5'
            stroke='#71717A'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M20 6H22.5'
            stroke='#71717A'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1.5 18H4'
            stroke='#71717A'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <circle cx='18' cy='6' r='2' stroke='#71717A' strokeWidth='1.5' />
        <circle cx='6' cy='18' r='2' stroke='#71717A' strokeWidth='1.5' />
    </svg>
);
export default FilterIcon;
