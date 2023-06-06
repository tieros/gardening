import styled, { css } from 'styled-components';

type Props = {
    onClick?: () => void;
    mode?: 'primary' | 'secondary' | 'white' | 'danger';
    children: React.ReactNode;
};

const StyledButton = styled.button<Props>`
    ${({ theme, mode }) => css`
        border-radius: 30px;
        padding: 10px 20px;
        box-shadow: ${theme.boxShadows.button};
        font-weight: 500;

        ${() => {
            switch (mode) {
                case 'primary':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.pink};
                    `;
                case 'secondary':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.green};
                    `;
                case 'white':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.background};
                        border: 1px solid ${theme.colors.dark};
                    `;
                case 'danger':
                    return css`
                        color: ${theme.colors.background};
                        background-color: ${theme.colors.danger};
                    `;
                default:
                    return null;
            }
        }};
    `}
`;

const Button = ({ onClick, mode = 'primary', children }: Props) => (
    <StyledButton
        mode={mode}
        onClick={onClick}
        className='w-[155px] md:w-[300px] h-[45px] md:h-[58px] text-base md:text-lg'
    >
        {children}
    </StyledButton>
);
export default Button;
