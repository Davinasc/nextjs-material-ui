import { Typography } from '@mui/material';
import routes from '@app/constants/routes';
import Link from '@app/components/Link';

export default function AvailableUnitsPage() {
	return (
		<>
			<Typography variant="h4" color="primary">
				Hello World ✌️
			</Typography>

			<Link {...routes.unitDetails('1')}>View details</Link>
		</>
	);
}
