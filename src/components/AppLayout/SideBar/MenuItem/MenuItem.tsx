import type { ReactNode } from 'react';
import { StyledListItemIcon, StyledListItemText, StyledMenuItem } from './MenuItem.styles';

export interface MenuItemProps {
	open: boolean;
	text: string;
	icon?: ReactNode | undefined;
}

export default function MenuItem({ open, icon, text }: MenuItemProps) {
	return (
		<StyledMenuItem open={open}>
			<StyledListItemIcon open={open}>{icon}</StyledListItemIcon>
			<StyledListItemText primary={text} open={open} />
		</StyledMenuItem>
	);
}
