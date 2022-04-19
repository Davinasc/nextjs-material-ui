import { styled } from '@mui/material/styles';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';

import type { MenuItemProps } from './MenuItem';

type StyledComponent = Pick<MenuItemProps, 'open'>;

export const StyledMenuItem = styled(MenuItem, {
	shouldForwardProp: prop => prop !== 'open',
})<StyledComponent>(({ open, theme: { spacing } }) => ({
	minHeight: spacing(6),
	justifyContent: open ? 'initial' : 'center',
	px: spacing(2.5),
}));

export const StyledListItemIcon = styled(ListItemIcon, {
	shouldForwardProp: prop => prop !== 'open',
})<StyledComponent>(({ open, theme: { spacing } }) => ({
	minWidth: 0,
	mr: open ? spacing(1.5) : 'auto',
	justifyContent: 'center',
}));

export const StyledListItemText = styled(ListItemText, {
	shouldForwardProp: prop => prop !== 'open',
})<StyledComponent>(({ open }) => ({
	opacity: open ? 1 : 0,
}));
