import { AvatarProps as MuiAvatarProps } from '@mui/material';

import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends MuiAvatarProps {
	size: 'sm' | 'md';
	color: 'primary' | 'error' | 'warning' | 'success' | 'default';
	text?: string;
}

export default function Avatar({ size = 'sm', color = 'default', text, ...props }: AvatarProps) {
	return (
		<StyledAvatar size={size} color={color} {...props}>
			{text}
		</StyledAvatar>
	);
}
