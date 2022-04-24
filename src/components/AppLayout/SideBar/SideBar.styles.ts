import { ElementType } from 'react';
import { CSSObject, Theme, styled } from '@mui/material/styles';
// mui components
import { Drawer, Grid, Tab, TabProps, Tabs } from '@mui/material';
// constants
import { drawerWidth, gray } from '@app/theme';
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
			minWidth: 0,
			minHeight: spacing(6),
			justifyContent: open ? 'initial' : 'center',
			padding: open ? spacing(1.5, 3) : spacing(1.5, 0),

			'& .MuiTab-iconWrapper': {
				justifyContent: 'center',
				minWidth: 0,
				width: spacing(3),
				height: spacing(3),
				marginRight: open ? spacing(3) : 0,
				color: gray[400],
				opacity: 0.9,
			},
		};
	}
);

export const BottomTabs = styled(Tabs)({
	marginTop: 'auto',
});

export const TabLabelSpan = styled('span')(() => {
	const { open } = useAppLayoutProvider();

	return {
		minWidth: 0,
		width: open ? 'auto' : 0,
		visibility: open ? 'visible' : 'hidden',
	};
});

export const UserInfoGrid = styled(Grid)({
	height: 92,
	boxShadow: `inset 0px 1px 0px ${gray[100]}`,
	flexDirection: 'column',
	justifyContent: 'center',
});
