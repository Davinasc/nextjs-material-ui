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
import { StyledDrawer, DrawerHeaderDiv } from './SideBar.styles';
// custom components
import MenuItem from './MenuItem';
// custom hooks
import useAppLayoutProvider from '../useAppLayoutProvider';

const menu = [
	{ text: 'Inbox', icon: <InboxIcon /> },
	{ text: 'Starred', icon: <MailIcon /> },
	{ text: 'Send email', icon: <InboxIcon /> },
	{ text: 'Drafts', icon: <MailIcon /> },
];

export default function SideBar() {
	const { open, toggleDrawer } = useAppLayoutProvider();

	return (
		<StyledDrawer variant="permanent" open={open}>
			<DrawerHeaderDiv>
				<IconButton onClick={toggleDrawer}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</DrawerHeaderDiv>

			<MenuList>
				{menu.map(item => (
					<MenuItem key={item.text} {...item} />
				))}
			</MenuList>
		</StyledDrawer>
	);
}
