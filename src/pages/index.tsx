import { Typography } from '@mui/material';
import MetricCard from '@app/components/MetricCard';

export default function HomePage() {
	return (
		<>
			<Typography variant="h4" color="primary">
				<div>Hello World ✌️</div>
			</Typography>

			<MetricCard title="Todays sales" value="2,456" progress={75} variant="positive" />
		</>
	);
}
