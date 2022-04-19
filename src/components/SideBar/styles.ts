import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer } from '@mui/material';
import type { Theme, CSSObject } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = ({ transitions }: Theme): CSSObject => ({
	width: drawerWidth,
	transition: transitions.create('width', {
		easing: transitions.easing.sharp,
		duration: transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = ({ transitions, spacing, breakpoints }: Theme): CSSObject => ({
	transition: transitions.create('width', {
		easing: transitions.easing.sharp,
		duration: transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${spacing(7)} + 1px)`,

	[breakpoints.up('sm')]: {
		width: `calc(${spacing(8)} + 1px)`,
	},
});

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	})
);
