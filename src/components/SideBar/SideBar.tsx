import { useState } from 'react';
// mui components
import { IconButton, MenuList } from '@mui/material';
// mui Icons
import {
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
// styled components
import { Drawer, DrawerHeader } from './styles';
// custom components
import MenuItem from './MenuItem';

const menu = [
	{ text: 'Inbox', icon: <InboxIcon /> },
	{ text: 'Starred', icon: <MailIcon /> },
	{ text: 'Send email', icon: <InboxIcon /> },
	{ text: 'Drafts', icon: <MailIcon /> },
];

export default function SideBar() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => setOpen(isOpen => !isOpen);

	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader>
				<IconButton onClick={toggleDrawer}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</DrawerHeader>

			<MenuList>
				{menu.map(item => (
					<MenuItem key={item.text} open={open} {...item} />
				))}
			</MenuList>
		</Drawer>
	);
}
