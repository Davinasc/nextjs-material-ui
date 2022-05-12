import type { ProgressValue } from '@app/typings/common';
// mui components
import { Typography } from '@mui/material';
// custom components
import CircularProgressChart, {
	CircularProgressChartVariant,
} from '@app/components/CircularProgressChart';
// styled components
import { ChartGrid, ContainerGrid, TextGrid } from './MetricCard.styles';

export interface MetricCardProps {
	title: string;
	value: string;
	progress: ProgressValue;
	variant: CircularProgressChartVariant;
}

export default function MetricCard({ value, variant, title, progress }: MetricCardProps) {
	return (
		<ContainerGrid container>
			<TextGrid item container>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="h3">{value}</Typography>
			</TextGrid>

			<ChartGrid item>
				<CircularProgressChart value={progress} variant={variant} size={96} />
			</ChartGrid>
		</ContainerGrid>
	);
}
