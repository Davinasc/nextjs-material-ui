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
import UserAvatar from '@app/components/UserAvatar';
// styled components
import {
	BottomTabs,
	DrawerHeaderDiv,
	StyledDrawer,
	StyledTab,
	TabLabelSpan,
	UserInfoGrid,
} from './SideBar.styles';
// custom hooks
import useAppLayoutProvider from '../useAppLayoutProvider';

function Label({ label }: { label: string }) {
	return <TabLabelSpan>{label}</TabLabelSpan>;
}

const primaryTabs = [
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

const secondaryTabs = [
	{
		to: routes.settings.href,
		label: <Label label="Settings" />,
		icon: <InboxIcon />,
	},
	{
		to: routes.helpCenter.href,
		label: <Label label="Help center" />,
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
				{primaryTabs.map(tab => (
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
			<BottomTabs orientation="vertical" value={pathname}>
				{secondaryTabs.map(tab => (
					<StyledTab
						key={tab.to}
						value={tab.to}
						component={NextLinkComposed}
						iconPosition="start"
						{...tab}
					/>
				))}
			</BottomTabs>

			{/* User info */}
			<UserInfoGrid container>
				<UserAvatar
					name="Davi Nascimento"
					plan="Master plan"
					src="https://avatars.githubusercontent.com/u/17314524?v=4"
				/>
			</UserInfoGrid>
		</StyledDrawer>
	);
}
