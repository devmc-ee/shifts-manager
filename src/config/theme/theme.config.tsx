import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createTheme from '@mui/system/createTheme/createTheme';

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    MAIN = 'n000',
    LIGHT = '#FDEB01',
}

const theme = createTheme({
    palette: {
        primary: {
            main: themePalette.MAIN,
            light: themePalette.LIGHT,
        },
    },
});

// eslint-disable-next-line prettier/prettier, react/prop-types
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
