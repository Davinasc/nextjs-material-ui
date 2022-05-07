import { useRouter } from 'next/router';
import { Toolbar } from '@mui/material';
// mui Icons
import { Search as SearchIcon } from '@mui/icons-material';
// utils
import { getPageTitleByPathname } from '@app/utils/routes';
// components
import NotificationsMenu from './NotificationsMenu';
// styled components
import {
	ControlsGrid,
	SearchBoxDiv,
	SearchIconWrapperDiv,
	StyledAppBar,
	StyledInputBase,
	TitleTypography,
} from './Header.styles';

export default function Header() {
	const { pathname } = useRouter();
	const pageTitle = getPageTitleByPathname(pathname);

	return (
		<StyledAppBar>
			<Toolbar disableGutters style={{ alignItems: 'flex-end' }}>
				<TitleTypography variant="h2" noWrap>
					{pageTitle}
				</TitleTypography>

				{/* Right controls */}
				<ControlsGrid container>
					<NotificationsMenu />

					<SearchBoxDiv>
						<SearchIconWrapperDiv>
							<SearchIcon />
						</SearchIconWrapperDiv>

						<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
					</SearchBoxDiv>
				</ControlsGrid>
			</Toolbar>
		</StyledAppBar>
	);
}
