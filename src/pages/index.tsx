import { ChangeEvent, useState } from 'react';
// mui components
import { Grid, Typography } from '@mui/material';
// custom components
import MetricCard from '@app/components/MetricCard';
import ListingCard from '@app/components/ListingCard';
import SearchInput from '@app/components/SearchInput';

const mockListing = {
	description:
		'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
	location: 'Boston',
	bedrooms: 5,
	category: 'Villa',
};

// TODO: To be moved to the api
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
		title: 'New York Townhouse',
		media:
			'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
	},
	{
		...mockListing,
		id: 3,
		title: 'Hamptons Villa',
		media:
			'https://www.kbbonline.com/wp-content/uploads/2020/02/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg',
	},
	{
		...mockListing,
		id: 4,
		title: 'Beachfront Mansion Miami',
		media:
			'https://www.inspectorproinsurance.com/wp-content/uploads/2021/06/debby-hudson-FmCSSSGge-0-unsplash-3-2-scaled.jpg',
	},
	{
		...mockListing,
		id: 5,
		title: 'San Fransisco Condo',
		media: 'https://www.rhbcd.com/wp-content/uploads/naomi-hebert-MP0bgaS_d1c-unsplash-scaled.jpg',
	},
	{
		...mockListing,
		id: 6,
		title: 'Miami beach house',
		media:
			'https://cf.bstatic.com/xdata/images/hotel/max1024x768/12951984.jpg?k=b93e3b969fe261c0370f1e7c2b4a95fcad2d8e4ee15eb8c92c9afcef449c4b46&o=&hp=1',
	},
];

export default function HomePage() {
	const [search, setSearch] = useState('');

	const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Grid container wrap="nowrap" sx={{ gap: 3, mb: 4.5 }}>
				<MetricCard fullWidth title="Todays sales" value="2,456" progress={75} variant="positive" />
				<MetricCard fullWidth title="New Products" value="221" progress={50} variant="neutral" />
				<MetricCard fullWidth title="Inventory" value="1,425" progress={32} variant="negative" />
			</Grid>

			<Grid container wrap="nowrap" justifyContent="space-between" sx={{ gap: 2, mb: 3 }}>
				<Typography variant="h4">Your favorites</Typography>

				<SearchInput
					value={search}
					setValue={setSearch}
					onChange={searchChangeHandler}
					width={329}
				/>
			</Grid>

			<Grid container sx={{ columnGap: 3, rowGap: 2.5, mb: 4 }}>
				{listings.map(({ id, ...listing }) => (
					<ListingCard key={id} {...listing} style={{ flex: '1 1 25%' }} />
				))}
			</Grid>
		</>
	);
}
