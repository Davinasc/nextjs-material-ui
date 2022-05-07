import { useState } from 'react';
// mui components
import { IconButton, Menu, MenuItem, PopoverOrigin, Tooltip, Typography } from '@mui/material';
// mui Icons
import { Notifications as NotificationsIcon } from '@mui/icons-material';
// styled components
// import {} from './NotificationsMenu.styles';

const settings = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

export default function NotificationsMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const origin: PopoverOrigin = { vertical: 'top', horizontal: 'right' };

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<Tooltip title="Notifications">
				<IconButton onClick={handleMenu}>
					<NotificationsIcon />
				</IconButton>
			</Tooltip>

			<Menu
				keepMounted
				style={{ marginTop: 45 }}
				anchorEl={anchorEl}
				anchorOrigin={origin}
				transformOrigin={origin}
				open={!!anchorEl}
				onClose={handleClose}
			>
				{settings.map(setting => (
					<MenuItem key={setting} onClick={handleClose}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
