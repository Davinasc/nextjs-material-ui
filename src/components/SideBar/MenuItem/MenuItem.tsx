import type { ReactNode } from 'react';
import { Icon, Item, Text } from './styles';

export interface MenuItemProps {
	open: boolean;
	text: string;
	icon?: ReactNode | undefined;
}

export default function MenuItem({ open, icon, text }: MenuItemProps) {
	return (
		<Item open={open}>
			<Icon open={open}>{icon}</Icon>
			<Text primary={text} open={open} />
		</Item>
	);
}
