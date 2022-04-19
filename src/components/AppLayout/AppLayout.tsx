import type { PropsWithChildren } from 'react';
import Header from '@app/components/Header';
import SideBar from '@app/components/SideBar';

type AppLayoutProps = PropsWithChildren<unknown>;

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<Header />
			<SideBar />
			<div>
				<h1>{children}</h1>
			</div>
		</>
	);
}
