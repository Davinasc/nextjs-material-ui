import { styled } from '@mui/material/styles';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { gray } from '@app/theme';

export const StyledCard = styled(Card)(({ theme: { spacing } }) => ({
	minWidth: spacing(45),
	display: 'flex',
	flexDirection: 'column',
	gap: spacing(3),
	padding: spacing(3),
}));

export const StyledCardMedia = styled(CardMedia)(({ theme: { spacing } }) => ({
	width: '100%',
	height: spacing(19.5),
}));

export const DetailsGrid = styled(Grid)(({ theme: { spacing } }) => ({
	gap: spacing(2),
	flexWrap: 'nowrap',
}));

export const DetailsGridItem = styled(Grid)(({ theme: { spacing } }) => ({
	gap: spacing(1),
	display: 'flex',
	flexWrap: 'nowrap',
	alignItems: 'flex-start',

	'& .MuiSvgIcon-root': {
		color: gray[400],
		width: spacing(2),
		height: spacing(2),
	},
}));

export const StyledTypography = styled(Typography)({
	color: gray[600],
});
