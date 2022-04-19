import { styled } from '@mui/material/styles';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import useAppLayoutProvider from '@app/components/AppLayout/useAppLayoutProvider';

export const StyledMenuItem = styled(MenuItem)(({ theme: { spacing } }) => {
	const { open } = useAppLayoutProvider();

	return {
		minHeight: spacing(6),
		justifyContent: open ? 'initial' : 'center',
		px: spacing(2.5),
	};
});

export const StyledListItemIcon = styled(ListItemIcon)(({ theme: { spacing } }) => {
	const { open } = useAppLayoutProvider();

	return {
		minWidth: 0,
		mr: open ? spacing(1.5) : 'auto',
		justifyContent: 'center',
	};
});

export const StyledListItemText = styled(ListItemText)(() => {
	const { open } = useAppLayoutProvider();

	return { opacity: open ? 1 : 0 };
});
