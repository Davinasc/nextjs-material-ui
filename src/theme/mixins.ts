import { Theme, CSSObject } from '@mui/material/styles';
import { getDrawerWidth } from '@app/theme/utils';

export const mainContainerMixin = ({ transitions, spacing }: Theme, open: boolean): CSSObject => ({
	marginLeft: getDrawerWidth(open),
	width: `calc(100% - ${getDrawerWidth(open)}px)`,
	padding: spacing(0, 4.5),

	transition: transitions.create(['width', 'margin'], {
		easing: transitions.easing.sharp,
		duration: transitions.duration.leavingScreen,
	}),

	...(open && {
		transition: transitions.create(['width', 'margin'], {
			easing: transitions.easing.sharp,
			duration: transitions.duration.enteringScreen,
		}),
	}),
});
