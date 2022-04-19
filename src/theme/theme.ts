import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: { main: '#25b4b1', contrastText: '#fff' },
		secondary: { main: '#40BAD5' },
		error: { main: red.A400 },
		background: { default: '#fafafa', paper: '#fff' },
	},
	typography: {
		fontFamily: 'Quicksand, Montserrat, sans-serif',
		body1: { fontWeight: 300 },
		body2: { fontWeight: 500 },
	},
	components: {
		MuiButtonBase: {
			defaultProps: { disableRipple: true, disableTouchRipple: true },
		},
		MuiButton: {
			defaultProps: { disableElevation: true },
			styleOverrides: {
				root: { textTransform: 'none', fontWeight: 600 },
			},
		},
		MuiCard: {
			defaultProps: { raised: false },
			styleOverrides: {
				root: {
					borderRadius: 4,
					border: '1px solid rgb(219,219,219)',
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
