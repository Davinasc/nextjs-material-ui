import type { ProgressValue } from '@app/typings/common';
// mui Icons
import {
	TrendingDownOutlined as TrendingDownOutlinedIcon,
	TrendingFlatOutlined as TrendingFlatOutlinedIcon,
	TrendingUpOutlined as TrendingUpOutlinedIcon,
} from '@mui/icons-material';
// styled components
import {
	BackgroundCircularProgress,
	ContainerDiv,
	IconDiv,
	ProgressDiv,
	StyledCircularProgress,
} from './CircularProgressChart.styles';

export type CircularProgressChartVariant = 'positive' | 'neutral' | 'negative';

export interface CircularProgressChartProps {
	variant: CircularProgressChartVariant;
	value: ProgressValue;
	size?: number;
}

type Icon = Record<CircularProgressChartProps['variant'], React.ReactElement>;

const icon: Icon = {
	positive: <TrendingUpOutlinedIcon />,
	neutral: <TrendingFlatOutlinedIcon />,
	negative: <TrendingDownOutlinedIcon />,
};

export default function CircularProgressChart({
	value,
	variant,
	size = 40,
}: CircularProgressChartProps) {
	return (
		<ContainerDiv variant={variant} size={size}>
			<ProgressDiv>
				<BackgroundCircularProgress variant="determinate" value={100} size={size} thickness={2.8} />
				<StyledCircularProgress
					disableShrink
					variant="determinate"
					value={value}
					size={size}
					thickness={2.8}
				/>
			</ProgressDiv>

			<IconDiv>{icon[variant]}</IconDiv>
		</ContainerDiv>
	);
}
