// mui components
import { IconButton, MenuList } from '@mui/material';
// mui Icons
import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
} from '@mui/icons-material';
// constants
import { routes } from '@app/constants';
// custom components
import MenuItem from './MenuItem';
// styled components
import { DrawerHeaderDiv, StyledDrawer } from './SideBar.styles';
// custom hooks
import useAppLayoutProvider from '../useAppLayoutProvider';

const menu = [
	{
		text: 'Dashboard',
		icon: <InboxIcon />,
		linkProps: { ...routes.dashboard },
	},
	{
		text: 'Available units',
		icon: <MailIcon />,
		linkProps: { ...routes.availableUnits },
	},
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
