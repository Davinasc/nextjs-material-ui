import { alpha, styled } from '@mui/material/styles';
import { AppBar, InputBase, Typography } from '@mui/material';
import { mainContainerMixin } from '@app/theme';
import useAppLayoutProvider from '../useAppLayoutProvider';

export const StyledAppBar = styled(AppBar)(({ theme }) => {
	const { open } = useAppLayoutProvider();

	return {
		zIndex: theme.zIndex.drawer + 1,
		marginBottom: theme.spacing(3),
		...mainContainerMixin(theme, open),
	};
});

export const SearchBoxDiv = styled('div')(({ theme: { shape, palette, spacing } }) => ({
	position: 'relative',
	borderRadius: shape.borderRadius,
	backgroundColor: alpha(palette.common.white, 0.15),
	marginLeft: spacing(1),
	width: 'auto',
	height: 40,

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
	maxHeight: 40,
});
