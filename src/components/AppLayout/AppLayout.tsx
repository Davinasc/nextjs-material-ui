import { PropsWithChildren } from 'react';
// styled components
import { ContainerGrid } from './AppLayout.styles';
// custom components
import AppLayoutProvider from './AppLayoutProvider';
import Header from './Header';
import SideBar from './SideBar';

type AppLayoutProps = PropsWithChildren<unknown>;

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<AppLayoutProvider>
			<Header />
			<SideBar />

			<ContainerGrid container direction="column" as="main">
				{children}
			</ContainerGrid>
		</AppLayoutProvider>
	);
}
