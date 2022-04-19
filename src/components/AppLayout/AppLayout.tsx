import { PropsWithChildren } from 'react';
import AppLayoutProvider from './AppLayoutProvider';
import Header from './Header';
import SideBar from './SideBar';

type AppLayoutProps = PropsWithChildren<unknown>;

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<AppLayoutProvider>
			<Header />
			<SideBar />
			<div>
				<h1>{children}</h1>
			</div>
		</AppLayoutProvider>
	);
}
