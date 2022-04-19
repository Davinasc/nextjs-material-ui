import type { ReactNode } from 'react';
import { StyledListItemIcon, StyledListItemText, StyledMenuItem } from './MenuItem.styles';

export interface MenuItemProps {
	text: string;
	icon?: ReactNode | undefined;
}

export default function MenuItem({ icon, text }: MenuItemProps) {
	return (
		<StyledMenuItem>
			<StyledListItemIcon>{icon}</StyledListItemIcon>
			<StyledListItemText primary={text} />
		</StyledMenuItem>
	);
}
