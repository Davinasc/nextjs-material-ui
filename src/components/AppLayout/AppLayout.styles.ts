import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { mainContainerMixin } from '@app/theme';
import useAppLayoutProvider from './useAppLayoutProvider';

export const ContainerGrid = styled(Grid)(({ theme }) => {
	const { open } = useAppLayoutProvider();

	return mainContainerMixin(theme, open);
});
