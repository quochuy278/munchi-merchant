import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        secondary: {
            main: '#101012',
            light: 'F5F5F6',
            dark: '#E7E7E7',
            contrastText: '#FFFFFF',
        },
        success: {
            main: 'rgb(35, 197, 82, 1)',
        },
        info: {
            main: 'rgb(52, 120, 246, 1)',
        },
        grey: {
            '800': 'rgb(16, 16, 18, 0.9)',
            '700': 'rgb(16, 16, 18, 0.5)',
            '600': 'rgb(16, 16, 18, 0.15)',
            '300': '#E7E7E7',
            '200': 'F5F5F6',
            '100': '#FFFFFF',
        },
    },
    components: {
        // Name of the component ⚛️
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: 'none',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                // The props to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                fontFamily: 'DM-Sans-Medium',
            },
        },
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
    },
    typography: {
        fontFamily: ['DM-Sans-Medium'].join(','),
        body2: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            '@media screen and (min-width: 350px) and (max-width: 450px)': {
                fontSize: '12px',
                lineHeight: '16px',
            },
        },
        body1: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            alignItems: 'center',
            '@media screen and (min-width: 350px) and (max-width: 450px)': {
                fontSize: '14px',
                lineHeight: '16px',
            },
        },
        h1: {
            fontWeight: 700,
            fontSize: '32px',

            lineHeight: '24px',
            '@media screen and (min-width: 350px) and (max-width: 450px)': {
                fontSize: '28px',
            },
            marginBottom: '20px',
            // font-weight: 700,
            // font-size: "28px,
            // font-style: "italic",
            // line-height: "24px";
        },
        subtitle2: {
            //styleName: Subheadline 3;

            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0em',
            textAlign: 'left',
        },
        h3: {
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: '24px',
            textAlign: 'center',
            '@media screen and (min-width: 350px) and (max-width: 450px)': {
                fontSize: '20px',
                lineHeight: '24px',
            },
        },
        h5: {
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '24px',
            '@media screen and (min-width: 350px) and (max-width: 450px)': {
                fontSize: '16px',
                lineHeight: '16px',
            },
        },
    },
})

export default theme
