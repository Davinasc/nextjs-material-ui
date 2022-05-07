import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { base, blue, gray, green, red, yellow } from './colors';

const text = { fontStyle: 'normal', lineHeight: 1.5, color: gray[800] };
const heading = { ...text, fontWeight: 600 };
const paragraph = { ...text, fontWeight: 400 };

const palette = {
	primary: {
		main: blue[500],
		dark: blue[600],
		light: blue[100],
		contrastText: base.white,
	},
	secondary: {
		main: gray[50],
		dark: gray[100],
		light: base.white,
		contrastText: gray[900],
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
		primary: gray[800],
		secondary: gray[400],
		disabled: gray[300],
	},
};

// Create a theme instance.
let theme = createTheme();
theme = createTheme(theme, {
	palette,
	typography: {
		fontFamily: 'General Sans, IBM Plex Mono, sans-serif',
		h1: { ...heading, fontSize: 42, lineHeight: 1.2 },
		h2: { ...heading, fontSize: 36, lineHeight: 1.2 },
		h3: { ...heading, fontSize: 28, lineHeight: 1.2 },
		h4: { ...heading, fontSize: 24 },
		h5: { ...heading, fontSize: 18 },
		h6: { ...heading, fontSize: 14 },
		body1: { ...paragraph, fontSize: 12 },
		body2: { ...paragraph, fontSize: 14 },
		body3: { ...paragraph, fontSize: 16 },
		labelLg: { ...paragraph, fontSize: 16, lineHeight: 1 },
	},
	components: {
		MuiButtonBase: {
			defaultProps: { disableRipple: true, disableTouchRipple: true },
			styleOverrides: {
				root: { textTransform: 'none' },
			},
		},
		MuiButton: {
			defaultProps: { disableElevation: true, variant: 'contained' },
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					backgroundColor: base.white,
					border: '1px solid',
					borderRadius: 32,
					borderColor: gray[200],

					'&:hover': { backgroundColor: gray[50] },
					'&:focus': { borderColor: palette.primary.main },
					'&:disabled': {
						backgroundColor: gray[50],
						border: 'none',

						'& .MuiSvgIcon-root': { color: gray[300] },
					},

					'& .MuiSvgIcon-root': { color: gray[900] },
				},
				colorPrimary: {
					backgroundColor: palette.primary.main,
					border: 'none',

					'&:hover': { backgroundColor: palette.primary.dark },
					'&:focus': { border: `2px solid ${blue[200]}` },
					'&:disabled': { backgroundColor: blue[100] },

					'& .MuiSvgIcon-root': { color: palette.primary.contrastText },
				},
				colorSecondary: {
					backgroundColor: palette.secondary.main,
					border: 'none',

					'&:hover': { backgroundColor: palette.secondary.dark },
					'&:disabled': { backgroundColor: gray[50] },

					'& .MuiSvgIcon-root': { color: palette.secondary.contrastText },
				},
				sizeMedium: {
					width: 40,
					height: 40,
					padding: 12,

					'& .MuiSvgIcon-root': { width: 16, height: 16 },
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					color: gray[600],

					'& .MuiSvgIcon-root': {
						color: gray[400],

						transition: theme.transitions.create(['color'], {
							duration: 400,
							easing: theme.transitions.easing.easeInOut,
						}),
					},

					'&.Mui-selected': {
						background: blue[50],
						color: blue[900],

						'& .MuiSvgIcon-root': { color: palette.primary.main },
					},

					'&:hover': {
						background: blue[50],
						color: blue[900],
						'& .MuiSvgIcon-root': { color: palette.primary.main },
					},

					transition: theme.transitions.create(['background', 'color'], {
						duration: 400,
						easing: theme.transitions.easing.easeInOut,
					}),
				},
			},
		},
		MuiCard: {
			defaultProps: { raised: false },
			styleOverrides: {
				root: {
					borderRadius: 4,
					border: `1px solid ${gray[200]}`,
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
