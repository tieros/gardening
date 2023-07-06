type Props = {
    onMouseDown: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
};
const EyeOffIcon = ({ onMouseDown }: Props) => (
    <svg
        onMouseDown={onMouseDown}
        width='20px'
        height='20px'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M16.001 29V25M10.8232 28.3184L11.8592 24.4554M5.999 26.3203L8 22.8573M1.8574 23.1426L4.6854 20.3156M21.1768 28.3184L20.1418 24.4554M26 26.3203L24 22.8563M30.1416 23.1426L27.3136 20.3146M31 14C31 16 26 25 16 25C6 25 1 16 1 14C1 12 6 3 16 3C26 3 31 12 31 14Z'
            stroke='#54443F'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
export default EyeOffIcon;
