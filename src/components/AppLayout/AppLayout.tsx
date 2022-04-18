import SideBar from '@components/SideBar';
import Header from '@components/Header';

import type { PropsWithChildren } from 'react';

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
