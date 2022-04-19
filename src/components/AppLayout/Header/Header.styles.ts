import { styled, alpha } from '@mui/material/styles';
import { InputBase, AppBar, AppBarProps, Typography } from '@mui/material';
import { drawerWidth } from '@app/theme';

type StyledAppBarProps = AppBarProps & { open: boolean };

function getDrawerWidth(open: boolean) {
	return open ? drawerWidth.opened : drawerWidth.closed;
}

export const StyledAppBar = styled(AppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<StyledAppBarProps>(({ theme, open }) => ({
	marginLeft: getDrawerWidth(open),
	width: `calc(100% - ${getDrawerWidth(open)}px)`,
	zIndex: theme.zIndex.drawer + 1,

	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),

	...(open && {
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export const SearchBoxDiv = styled('div')(({ theme: { shape, palette, spacing } }) => ({
	position: 'relative',
	borderRadius: shape.borderRadius,
	backgroundColor: alpha(palette.common.white, 0.15),
	marginLeft: spacing(1),
	width: 'auto',

	'&:hover': {
		backgroundColor: alpha(palette.common.white, 0.25),
	},
}));

export const SearchIconWrapperDiv = styled('div')(({ theme: { spacing } }) => ({
	padding: spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme: { spacing, transitions } }) => ({
	color: 'inherit',

	'& .MuiInputBase-input': {
		padding: spacing(1),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${spacing(4)})`,
		transition: transitions.create('width'),
		width: '12ch',

		'&:focus': {
			width: '20ch',
		},
	},
}));

export const TitleTypography = styled(Typography)({
	flexGrow: 1,
	display: 'block',
});
