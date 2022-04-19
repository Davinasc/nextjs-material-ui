import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';
import type { Theme, CSSObject } from '@mui/material/styles';
import { drawerWidth } from '@app/theme';

const openedMixin = ({ transitions }: Theme): CSSObject => ({
	width: drawerWidth.opened,
	overflowX: 'hidden',
	transition: transitions.create('width', {
		easing: transitions.easing.sharp,
		duration: transitions.duration.enteringScreen,
	}),
});

const closedMixin = ({ transitions }: Theme): CSSObject => ({
	width: drawerWidth.closed,
	overflowX: 'hidden',
	transition: transitions.create('width', {
		easing: transitions.easing.sharp,
		duration: transitions.duration.leavingScreen,
	}),
});

export const DrawerHeaderDiv = styled('div')(({ theme: { spacing, mixins } }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: spacing(0, 1),
	// necessary for content to be below app bar
	...mixins.toolbar,
}));

export const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth.opened,
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
