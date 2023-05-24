import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../../../../styles/theme';

type ThemeType = typeof theme;
type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body-small'
    | 'body-large'
    | 'span'
    | React.ComponentType<any>
    | string;

type ValuesType<T> = T[keyof T];
interface TextProps {
    fontFamily?: keyof ThemeType['fonts']['fontFamilies'];
    fontSize?: keyof ThemeType['fonts']['sizes'];
    children?: React.ReactNode;
    color?: keyof ThemeType['colors'];
    mode?: Variant;
    fontWeight?: ValuesType<ThemeType['fonts']['weights']>;
    className?: string;
}

const StyledText = styled.span<{
    as: React.ComponentType<any>;
    color?: keyof ThemeType['colors'];
    fontFamily?: keyof ThemeType['fonts']['fontFamilies'];
    fontSize?: keyof ThemeType['fonts']['sizes'];
    fontWeight?:
        | ValuesType<ThemeType['fonts']['weights']>
        | keyof ThemeType['fonts']['weights'];
    mode?: Variant;
}>`
    ${({ theme, fontFamily, fontWeight, color, mode, fontSize }) => css`
        color: ${color || 'inherit'};
        font-family: ${fontFamily
            ? theme.fonts.fontFamilies[fontFamily]
            : 'inherit'};
        font-weight: ${fontWeight};
        font-size: ${fontSize ? theme.fonts.sizes[fontSize] : ''};
        ${(() => {
            switch (mode) {
                case 'h1':
                    return css`
                        font-size: ${theme.fonts.sizes['64']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['48']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['32']};
                        }
                    `;
                case 'h2':
                    return css`
                        font-size: ${theme.fonts.sizes['48']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['36']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['24']};
                        }
                    `;
                case 'h3':
                    return css`
                        font-size: ${theme.fonts.sizes['36']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['32']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['20']};
                        }
                    `;
                case 'h4':
                    return css`
                        font-size: ${theme.fonts.sizes['24']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['20']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['18']};
                        }
                    `;
                case 'h5':
                    return css`
                        font-size: ${theme.fonts.sizes['20']};
                    `;
                case 'h6':
                    return css`
                        font-size: ${theme.fonts.sizes['18']};
                    `;
                case 'body':
                    return css`
                        font-size: ${theme.fonts.sizes['16']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['20']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['14']};
                        }
                    `;
                case 'body-large':
                    return css`
                        font-size: ${theme.fonts.sizes['24']};
                        @media ${theme.breakpoints.tablet} {
                            font-size: ${theme.fonts.sizes['20']};
                        }
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['18']};
                        }
                    `;
                case 'body-small':
                    return css`
                        font-size: ${theme.fonts.sizes['14']};
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['12']};
                        }
                    `;
                case 'span':
                    return css`
                        font-size: ${theme.fonts.sizes['14']};
                        @media ${theme.breakpoints.mobile} {
                            font-size: ${theme.fonts.sizes['12']};
                        }
                    `;
                default:
                    return css`
                        font-size: ${theme.fonts.sizes['16']};
                    `;
            }
        })()}
    `}
`;

export const Text = ({
    fontFamily,
    fontWeight,
    color,
    children,
    mode,
    className,
    fontSize,
}: TextProps) => {
    const getElementType = (modeValue: Variant | undefined) => {
        if (modeValue && modeValue?.startsWith('h')) {
            return modeValue;
        } else if (
            modeValue === 'body' ||
            modeValue === 'body-small' ||
            modeValue === 'body-large'
        ) {
            return 'p';
        } else if (modeValue === 'span') {
            return 'span';
        }
        return 'span';
    };
    return (
        <StyledText
            as={getElementType(mode) || 'span'}
            className={className}
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            mode={mode}
        >
            {children}
        </StyledText>
    );
};
