import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const ContainerGrid = styled(Grid)(({ theme: { spacing } }) => ({
	width: spacing(45),
	height: spacing(20),
	alignItems: 'center',
	flexWrap: 'nowrap',
}));

export const TextGrid = styled(Grid)(({ theme: { spacing } }) => ({
	height: '100%',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: spacing(3),
}));

export const ChartGrid = styled(Grid)(({ theme: { spacing } }) => ({
	marginRight: spacing(4),
	height: spacing(12),
}));
