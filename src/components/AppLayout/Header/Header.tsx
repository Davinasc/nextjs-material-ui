import { Toolbar } from '@mui/material';
// mui Icons
import { Search as SearchIcon } from '@mui/icons-material';
// styled components
import {
	SearchBoxDiv,
	SearchIconWrapperDiv,
	StyledAppBar,
	StyledInputBase,
	TitleTypography,
} from './Header.styles';

export default function Header() {
	return (
		<StyledAppBar>
			<Toolbar disableGutters>
				<TitleTypography variant="h6" noWrap>
					Page Title
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
