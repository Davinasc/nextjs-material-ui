import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Toolbar } from '@mui/material';
// utils
import { getPageTitleByPathname } from '@app/utils/routes';
// components
import SearchInput from '@app/components/SearchInput';
import NotificationsMenu from './NotificationsMenu';
// styled components
import { ControlsGrid, StyledAppBar, TitleTypography } from './Header.styles';

export default function Header() {
	const { pathname } = useRouter();
	const pageTitle = getPageTitleByPathname(pathname);

	const [search, setSearch] = useState('');

	const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<StyledAppBar>
			<Toolbar disableGutters style={{ alignItems: 'flex-end' }}>
				<TitleTypography variant="h2" noWrap>
					{pageTitle}
				</TitleTypography>

				{/* Right controls */}
				<ControlsGrid container>
					<NotificationsMenu />

					<SearchInput
						variant="resizable"
						value={search}
						setValue={setSearch}
						onChange={searchChangeHandler}
					/>
				</ControlsGrid>
			</Toolbar>
		</StyledAppBar>
	);
}
