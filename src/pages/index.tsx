import { Grid } from '@mui/material';
import MetricCard from '@app/components/MetricCard';

export default function HomePage() {
	return (
		<Grid container wrap="nowrap" sx={{ gap: 3 }}>
			<MetricCard fullWidth title="Todays sales" value="2,456" progress={75} variant="positive" />
			<MetricCard fullWidth title="New Products" value="221" progress={60} variant="neutral" />
			<MetricCard fullWidth title="Inventory" value="1,425" progress={47} variant="negative" />
		</Grid>
	);
}
