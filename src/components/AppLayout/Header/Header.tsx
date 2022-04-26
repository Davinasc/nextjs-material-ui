import { useRouter } from 'next/router';
import { Toolbar } from '@mui/material';
// mui Icons
import { Search as SearchIcon } from '@mui/icons-material';
// utils
import { getPageTitleByPathname } from '@app/utils/routes';
// styled components
import {
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
			<Toolbar disableGutters sx={{ alignItems: 'flex-end' }}>
				<TitleTypography variant="h2" noWrap>
					{pageTitle}
				</TitleTypography>

				<SearchBoxDiv>
					<SearchIconWrapperDiv>
						<SearchIcon />
					</SearchIconWrapperDiv>

					<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
				</SearchBoxDiv>
			</Toolbar>
		</StyledAppBar>
	);
}
