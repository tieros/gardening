import styled, { css } from 'styled-components';

type Props = {
    size?: 'small' | 'medium' | 'large';
    label: string;
    mode?: 'default' | 'light';
};

const StyledTag = styled.div<Omit<Props, 'label'>>`
    ${({ theme, size, mode }) => css`
        background: ${mode === 'default'
            ? theme.colors.peachLinear
            : theme.colors.lightGreen};
        text-align: center;
        border: ${mode === 'light' ? '1px solid #E9EBDD' : 'none'};
        color: ${theme.colors.dark};
        width: fit-content;
        display: flex;
        align-items: center;

        ${() => {
            switch (size) {
                case 'small':
                    return css`
                        border-radius: 10px;
                        height: 28px;
                        padding: 5px 12px;
                        font-size: 14px;
                    `;
                case 'medium':
                    return css`
                        border-radius: 15px;
                        height: 50px;
                        padding: 12px 20px;
                        font-size: 20px;
                    `;
                case 'large':
                    return css`
                        border-radius: 17px;
                        height: 70px;
                        padding: 20px 30px;
                        font-size: 32px;

                        @media (max-width: 768px) {
                            border-radius: 10px;
                            height: 50px;
                            padding: 5px 12px;
                            font-size: 16px;
                        }
                    `;
            }
        }};
    `}
`;

const Tag = ({ size = 'medium', label, mode = 'default' }: Props) => (
    <StyledTag size={size} mode={mode}>
        {label}
    </StyledTag>
);

export default Tag;
