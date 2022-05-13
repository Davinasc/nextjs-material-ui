import type { CSSProperties } from 'react';
// mui components
import { Button, Typography } from '@mui/material';
// mui icons
import {
	BusinessOutlined as BusinessOutlinedIcon,
	LocationOnOutlined as LocationOnOutlinedIcon,
	ViewCarouselOutlined as ViewCarouselOutlinedIcon,
} from '@mui/icons-material/';
// styled components
import {
	DetailsGrid,
	DetailsGridItem,
	StyledCard,
	StyledCardMedia,
	StyledTypography,
} from './ListingCard.styles';

export interface ListingCardProps {
	media: string;
	title: string;
	description: string;
	location: string;
	bedrooms: number;
	category: string;
	style?: CSSProperties;
}

export default function ListingCard(props: ListingCardProps) {
	const { media, description, title, location, bedrooms, category, style } = props;

	const bedroomsText = bedrooms === 1 ? 'Bedroom' : 'Bedrooms';

	return (
		<StyledCard style={style}>
			<StyledCardMedia src={media} />

			<div>
				<Typography variant="h5" sx={{ mb: 1 }}>
					{title}
				</Typography>

				<StyledTypography variant="body1">{description}</StyledTypography>
			</div>

			<DetailsGrid container>
				<DetailsGridItem item>
					<LocationOnOutlinedIcon />

					<StyledTypography variant="body1">{location}</StyledTypography>
				</DetailsGridItem>

				<DetailsGridItem item>
					<ViewCarouselOutlinedIcon />

					<StyledTypography variant="body1">
						{bedrooms} {bedroomsText}
					</StyledTypography>
				</DetailsGridItem>

				<DetailsGridItem item>
					<BusinessOutlinedIcon />

					<StyledTypography variant="body1">{category}</StyledTypography>
				</DetailsGridItem>
			</DetailsGrid>

			<Button fullWidth>View listing details</Button>
		</StyledCard>
	);
}
