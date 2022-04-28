import { useState } from 'react';
// mui components
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
// mui Icons
import { Notifications as NotificationsIcon } from '@mui/icons-material';
// styled components
// import {} from './NotificationsMenu.styles';

const settings = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

export default function NotificationsMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleMenu} sx={{ p: 0 }}>
					<NotificationsIcon />
				</IconButton>
			</Tooltip>

			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{settings.map(setting => (
					<MenuItem key={setting} onClick={handleClose}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
