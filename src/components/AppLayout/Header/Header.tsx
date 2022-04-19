import { Toolbar } from '@mui/material';
// mui Icons
import { Search as SearchIcon } from '@mui/icons-material';
// styled components
import {
	StyledAppBar,
	SearchBoxDiv,
	SearchIconWrapperDiv,
	StyledInputBase,
	TitleTypography,
} from './Header.styles';
// custom hooks
import useAppLayoutProvider from '../useAppLayoutProvider';

export default function Header() {
	const { open } = useAppLayoutProvider();

	return (
		<StyledAppBar position="static" open={open}>
			<Toolbar>
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
