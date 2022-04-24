import { AvatarProps as MuiAvatarProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { StyledAvatar } from './Avatar.styles';

export interface AvatarProps extends MuiAvatarProps {
	size: 'sm' | 'md';
	color: 'primary' | 'error' | 'warning' | 'success' | 'default';
}

export default function Avatar(props: PropsWithChildren<AvatarProps>) {
	const { size = 'sm', color = 'default', children } = props;

	return (
		<StyledAvatar size={size} color={color}>
			{children}
		</StyledAvatar>
	);
}
