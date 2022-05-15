import { styled } from '@mui/material/styles';
import { AppBar, Grid, Typography } from '@mui/material';
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

export const TitleTypography = styled(Typography)({
	flexGrow: 1,
	display: 'block',
	maxHeight: 40,
});

export const ControlsGrid = styled(Grid)({
	width: 'auto',
	gap: 12,
});
