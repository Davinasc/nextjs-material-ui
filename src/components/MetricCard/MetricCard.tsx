import type { ProgressValue } from '@app/typings/common';
// mui components
import { Typography } from '@mui/material';
// custom components
import CircularProgressChart, {
	CircularProgressChartVariant,
} from '@app/components/CircularProgressChart';
// styled components
import { ChartGrid, StyledCard, TextGrid } from './MetricCard.styles';

export interface MetricCardProps {
	title: string;
	value: string;
	progress: ProgressValue;
	variant: CircularProgressChartVariant;
	fullWidth?: boolean;
}

export default function MetricCard(props: MetricCardProps) {
	const { value, variant, title, progress, fullWidth = false } = props;

	return (
		<StyledCard fullWidth={fullWidth}>
			<TextGrid item container>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="h3">{value}</Typography>
			</TextGrid>

			<ChartGrid item>
				<CircularProgressChart value={progress} variant={variant} size={96} />
			</ChartGrid>
		</StyledCard>
	);
}
