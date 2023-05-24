import styled, { css } from 'styled-components';

type Props = {
    onClick: () => void;
    size?: 'small' | 'default';
    mode?: 'accent' | 'white' | 'danger' | 'green';
    children: React.ReactNode;
};

const StyledButton = styled.button<{
    size: 'small' | 'default';
    mode: 'accent' | 'white' | 'danger' | 'green';
}>`
    ${({ theme, size, mode }) => css`
        width: ${size === 'default' ? '300px' : '155px'};
        height: ${size === 'default' ? '58px' : '45px'};
        font-size: ${size === 'default' ? '20px' : '16px'};
        border-radius: 30px;
        padding: 10px 32px;
        box-shadow: ${theme.boxShadows.button};
        font-weight: 500;

        ${() => {
            switch (mode) {
                case 'accent':
                    return css`
                        color: ${theme.colors.dark};
                        background-color: ${theme.colors.accent};
                    `;
                case 'green':
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
            }
        }};
    `}
`;
const Button = ({
    onClick,
    size = 'default',
    mode = 'accent',
    children,
}: Props) => (
    <StyledButton size={size} mode={mode} onClick={() => onClick()}>
        {children}
    </StyledButton>
);
export default Button;
