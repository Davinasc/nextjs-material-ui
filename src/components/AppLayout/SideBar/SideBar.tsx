import { useRouter } from 'next/router';
// mui components
import { IconButton, Tabs } from '@mui/material';
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
import { NextLinkComposed } from '@app/components/Link';
// styled components
import { DrawerHeaderDiv, StyledDrawer, StyledTab, TabLabelSpan } from './SideBar.styles';
// custom hooks
import useAppLayoutProvider from '../useAppLayoutProvider';

function Label({ label }: { label: string }) {
	return <TabLabelSpan>{label}</TabLabelSpan>;
}

const tabs = [
	{
		to: routes.dashboard.href,
		label: <Label label="Dashboard" />,
		icon: <InboxIcon />,
	},
	{
		to: routes.availableUnits.href,
		label: <Label label="Available units" />,
		icon: <MailIcon />,
	},
];

export default function SideBar() {
	const { open, toggleDrawer } = useAppLayoutProvider();
	const { pathname } = useRouter();

	return (
		<StyledDrawer variant="permanent" open={open}>
			<DrawerHeaderDiv>
				<IconButton onClick={toggleDrawer}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
				{/* Logo */}
			</DrawerHeaderDiv>

			<Tabs orientation="vertical" value={pathname}>
				{tabs.map(tab => (
					<StyledTab
						key={tab.to}
						value={tab.to}
						component={NextLinkComposed}
						iconPosition="start"
						{...tab}
					/>
				))}
			</Tabs>

			{/* Sticky bottom list */}

			{/* User info */}
		</StyledDrawer>
	);
}
