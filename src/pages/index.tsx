import { Grid } from '@mui/material';
import MetricCard from '@app/components/MetricCard';
import ListingCard from '@app/components/ListingCard';

const mockListing = {
	description:
		'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
	location: 'Boston',
	bedrooms: 5,
	category: 'Villa',
};

const listings = [
	{
		...mockListing,
		id: 1,
		title: 'Boston family home',
		media:
			'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&q=60&fm=jpg&crop=faces%2Cedges&cs=tinysrgb&w=1200&fit=crop&auto=format&h=630&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-mode=normal&blend-alpha=10&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=000000',
	},
	{
		...mockListing,
		id: 2,
		title: 'Miami beach house',
		media:
			'https://43s9nl2car3y38bljk2aps69-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/pixasquare-4ojhpgKpS68-unsplash-1.jpg',
	},
	{
		...mockListing,
		id: 3,
		title: 'New York Townhouse',
		media:
			'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
	},
	{
		...mockListing,
		id: 4,
		title: 'Hamptons Villa',
		media:
			'https://www.kbbonline.com/wp-content/uploads/2020/02/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg',
	},
	{
		...mockListing,
		id: 5,
		title: 'Beachfront Mansion Miami',
		media:
			'https://www.inspectorproinsurance.com/wp-content/uploads/2021/06/debby-hudson-FmCSSSGge-0-unsplash-3-2-scaled.jpg',
	},
	{
		...mockListing,
		id: 6,
		title: 'San Fransisco Condo',
		media: 'https://www.rhbcd.com/wp-content/uploads/naomi-hebert-MP0bgaS_d1c-unsplash-scaled.jpg',
	},
];

export default function HomePage() {
	return (
		<>
			<Grid container wrap="nowrap" sx={{ gap: 3 }}>
				<MetricCard fullWidth title="Todays sales" value="2,456" progress={75} variant="positive" />
				<MetricCard fullWidth title="New Products" value="221" progress={60} variant="neutral" />
				<MetricCard fullWidth title="Inventory" value="1,425" progress={47} variant="negative" />
			</Grid>

			<Grid container sx={{ columnGap: 3, rowGap: 2.5, my: 4 }}>
				{listings.map(({ id, ...listing }) => (
					<ListingCard key={id} {...listing} style={{ flex: '1 1 25%' }} />
				))}
			</Grid>
		</>
	);
}
