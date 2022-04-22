import { ElementType } from 'react';
import { CSSObject, Theme, styled } from '@mui/material/styles';
// mui components
import { Drawer, Tab, TabProps } from '@mui/material';
// constants
import { drawerWidth } from '@app/theme';
// custom components
import useAppLayoutProvider from '../useAppLayoutProvider';

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

export const StyledTab = styled(Tab)<TabProps & { component: ElementType }>(
	({ theme: { spacing } }) => {
		const { open } = useAppLayoutProvider();

		return {
			minHeight: spacing(6),
			justifyContent: open ? 'initial' : 'center',
			padding: spacing(1.5, 3),

			'& .MuiTab-iconWrapper': {
				minWidth: 0,
				marginRight: open ? spacing(3) : 'auto',
				justifyContent: 'center',
			},
		};
	}
);

export const TabLabelSpan = styled('span')(() => {
	const { open } = useAppLayoutProvider();

	return {
		minWidth: 0,
		visibility: open ? 'visible' : 'hidden',
	};
});
