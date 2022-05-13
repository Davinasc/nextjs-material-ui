import { styled } from '@mui/material/styles';
import { Card, Grid } from '@mui/material';

export const StyledCard = styled(Card, {
	shouldForwardProp: prop => prop !== 'fullWidth',
})<{ fullWidth: boolean }>(({ theme: { spacing }, fullWidth }) => ({
	width: fullWidth ? '100%' : spacing(45),
	height: spacing(20),
	display: 'flex',
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
