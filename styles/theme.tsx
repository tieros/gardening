import { ReactNode } from 'react';
import {
    createGlobalStyle,
    ThemeProvider as StyledThemeProvider,
    DefaultTheme,
} from 'styled-components';
import { customtheme } from '../customtheme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof customtheme.colors;
        boxShadows: typeof customtheme.boxShadows;
    }
}

export const theme: DefaultTheme = {
    colors: customtheme.colors,
    boxShadows: customtheme.boxShadows,
};

// const GlobalStyle = createGlobalStyle`
//   body {
//     /* Additional global styles */
//   }
// `;

export const ThemeProvider = ({ children }: { children?: ReactNode }) => (
    <StyledThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        {children}
    </StyledThemeProvider>
);
