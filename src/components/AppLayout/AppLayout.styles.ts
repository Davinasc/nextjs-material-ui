import { styled } from '@mui/material/styles';
// mui components
import { Grid, GridProps } from '@mui/material';
import { mainContainerMixin } from '@app/theme';
// types
import { StyledWithComponentProp } from '@app/typings/styled-components';
// hooks
import useAppLayoutProvider from './useAppLayoutProvider';

export const ContainerGrid = styled(Grid)<StyledWithComponentProp<GridProps>>(({ theme }) => {
	const { open } = useAppLayoutProvider();

	return mainContainerMixin(theme, open);
});
