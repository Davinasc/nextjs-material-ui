import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import { blue, green, red, theme } from '@app/theme';
import type { CircularProgressChartVariant } from './CircularProgressChart';

type VariantColor = Record<CircularProgressChartVariant, string>;

const backgroundColor: VariantColor = {
	positive: green[100],
	neutral: blue[100],
	negative: red[100],
};

const color: VariantColor = {
	positive: theme.palette.success.main,
	neutral: theme.palette.primary.main,
	negative: theme.palette.error.main,
};

const iconColor: VariantColor = {
	positive: theme.palette.success.dark,
	neutral: theme.palette.primary.dark,
	negative: theme.palette.error.dark,
};

export const ProgressDiv = styled('div')({
	position: 'relative',
});

export const IconDiv = styled('div')({
	opacity: 0.9,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const BackgroundCircularProgress = styled(CircularProgress)({});

export const StyledCircularProgress = styled(CircularProgress)({
	position: 'absolute',
	left: 0,

	'& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
});

export const ContainerDiv = styled('div', {
	shouldForwardProp: prop => prop !== 'variant' && prop !== 'size',
})<{
	variant: CircularProgressChartVariant;
	size: number;
}>(
	({ variant, size }) => `
		position: relative;
		display: inline-flex;
		width: ${size}px;
		height: ${size}px;

		${BackgroundCircularProgress} {
			color: ${backgroundColor[variant]};
		}

		${StyledCircularProgress} {
			color: ${color[variant]};
		}

		${IconDiv} {
			color: ${iconColor[variant]};
		}
	`
);
