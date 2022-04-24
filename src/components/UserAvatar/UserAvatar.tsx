import { Typography } from '@mui/material';
import Avatar from '../Avatar';
import { ContainerGrid, TextGrid } from './UserAvatar.styles';

export interface UserAvatarProps {
	name: string;
	src?: string;
	plan?: string;
}

export default function UserAvatar({ name, plan, src }: UserAvatarProps) {
	const nameInitials = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;

	return (
		<ContainerGrid item container>
			<Avatar alt={name} src={src} color="default" size="sm">
				{nameInitials}
			</Avatar>

			<TextGrid item container direction="column">
				<Typography variant="labelLg" sx={{ mb: '2px' }}>
					{name}
				</Typography>

				<Typography variant="body2">{plan}</Typography>
			</TextGrid>
		</ContainerGrid>
	);
}
