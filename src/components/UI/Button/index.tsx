import styled, { css } from 'styled-components';

type Props = {
    onClick?: () => void;
    mode?: 'primary' | 'secondary' | 'white' | 'danger';
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

const StyledButton = styled.button<Props>`
    ${({ theme, mode }) => css`
        border-radius: 30px;
        padding: 10px 20px;
        box-shadow: ${theme.boxShadows.button};
        font-weight: 500;

        :disabled {
            cursor: not-allowed;
        }

        ${() => {
            switch (mode) {
                case 'primary':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.pink};
                        &:hover {
                            color: ${theme.colors.background};
                            background-color: #c75f63;
                        }
                    `;
                case 'secondary':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.green};
                        &:hover {
                            background-color: #7b8638;
                        }
                    `;
                case 'white':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.background};
                        border: 1px solid ${theme.colors.dark};
                        &:hover {
                            background-color: ${theme.colors.lightGreen};
                        }
                    `;
                case 'danger':
                    return css`
                        color: ${theme.colors.background};
                        background-color: ${theme.colors.danger};
                        &:hover {
                            background-color: #a43b3f;
                        }
                    `;
                default:
                    return null;
            }
        }};
    `}
`;

const Button = ({
    onClick,
    mode = 'primary',
    children,
    type = 'button',
    disabled,
}: Props) => (
    <StyledButton
        mode={mode}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className='xs:w-[155px] md:w-[300px] h-[45px] md:h-[58px] text-base md:text-lg flex items-center justify-center'
    >
        {children}
    </StyledButton>
);
export default Button;
