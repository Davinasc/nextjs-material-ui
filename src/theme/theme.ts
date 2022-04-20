import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { base, blue, green, grey, red, yellow } from './colors';

const text = { fontStyle: 'normal', lineHeight: 1.5, color: grey[800] };
const heading = { ...text, fontWeight: 600 };
const paragraph = { ...text, fontWeight: 400 };

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
			dark: blue[600],
			light: blue[100],
			contrastText: base.white,
		},
		secondary: {
			main: grey[50],
			dark: grey[100],
			light: base.white,
			contrastText: grey[900],
		},
		error: {
			main: red[500],
			dark: red[600],
			light: red[100],
			contrastText: base.white,
		},
		warning: {
			main: yellow[500],
			dark: yellow[600],
			light: yellow[100],
			contrastText: base.white,
		},
		success: {
			main: green[500],
			dark: green[600],
			light: green[100],
			contrastText: base.white,
		},
		text: {
			primary: grey[800],
			secondary: grey[400],
			disabled: grey[300],
		},
	},
	typography: {
		fontFamily: 'Quicksand, Montserrat, sans-serif',
		h1: { ...heading, fontSize: 42, lineHeight: 1.2 },
		h2: { ...heading, fontSize: 36, lineHeight: 1.2 },
		h3: { ...heading, fontSize: 28, lineHeight: 1.2 },
		h4: { ...heading, fontSize: 24 },
		h5: { ...heading, fontSize: 18 },
		h6: { ...heading, fontSize: 14 },
		body1: { ...paragraph, fontSize: 12 },
		body2: { ...paragraph, fontSize: 14 },
		body3: { ...paragraph, fontSize: 16 },
	},
	components: {
		MuiButtonBase: {
			defaultProps: { disableRipple: true, disableTouchRipple: true },
		},
		MuiButton: {
			defaultProps: { disableElevation: true, variant: 'contained' },
			styleOverrides: {
				root: { textTransform: 'none', fontWeight: 600 },
				containedPrimary: {},
			},
		},
		MuiCard: {
			defaultProps: { raised: false },
			styleOverrides: {
				root: {
					borderRadius: 4,
					border: `1px solid ${grey[200]}`,
				},
			},
		},
		MuiTextField: {
			defaultProps: { variant: 'outlined', size: 'small' },
		},
		MuiTooltip: {
			defaultProps: { arrow: true },
		},
		MuiAppBar: {
			defaultProps: { elevation: 0, position: 'static', color: 'transparent' },
		},
	},
});

export default responsiveFontSizes(theme);
