import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { gray } from '@app/theme';
import useAppLayoutProvider from '../AppLayout/useAppLayoutProvider';

export const ContainerGrid = styled(Grid)(({ theme: { spacing } }) => {
	const { open } = useAppLayoutProvider();

	return {
		width: open ? '100%' : 'auto',
		padding: open ? spacing(1.5, 3) : spacing(1.5, 0),
		justifyContent: open ? 'initial' : 'center',
		flexWrap: 'nowrap',
		alignItems: 'center',

		'& .MuiAvatar-root': {
			marginRight: open ? spacing(2) : 0,
		},
	};
});

export const TextGrid = styled(Grid)(() => {
	const { open } = useAppLayoutProvider();

	return {
		minWidth: 0,
		width: open ? 'auto' : 0,
		visibility: open ? 'visible' : 'hidden',

		'& .MuiTypography-root': {
			color: gray[600],
		},
	};
});
