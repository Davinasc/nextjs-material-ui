import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { base, blue, green, red, theme, yellow } from '@app/theme';
import type { AvatarProps } from './Avatar';

type Size = Record<AvatarProps['size'], number>;
type Color = Record<AvatarProps['color'], string>;

const sizeValue: Size = { sm: 32, md: 40 };

const borderColor: Color = {
	primary: theme.palette.primary.main,
	error: theme.palette.error.main,
	warning: theme.palette.warning.main,
	success: theme.palette.success.main,
	default: blue[100],
};

const background: Color = {
	primary: blue[50],
	error: red[50],
	warning: yellow[50],
	success: green[50],
	default: base.neutral,
};

export const StyledAvatar = styled(Avatar)<AvatarProps>(({ color, size }) => ({
	width: sizeValue[size],
	height: sizeValue[size],
	background: background[color],
	border: `2px solid ${borderColor[color]}`,
}));
