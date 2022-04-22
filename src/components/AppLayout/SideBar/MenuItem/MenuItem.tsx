import type { ReactNode } from 'react';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material';
// custom components
import Link, { LinkProps } from '@app/components/Link';
// styled components
import { StyledListItemIcon, StyledListItemText, StyledMenuItem } from './MenuItem.styles';

interface MenuItemProps extends MuiMenuItemProps {
	text: string;
	icon?: ReactNode | undefined;
	linkProps: LinkProps;
}

export default function MenuItem({ icon, text, linkProps }: MenuItemProps) {
	return (
		<Link {...linkProps}>
			<StyledMenuItem>
				<StyledListItemIcon>{icon}</StyledListItemIcon>
				<StyledListItemText primary={text} />
			</StyledMenuItem>
		</Link>
	);
}
