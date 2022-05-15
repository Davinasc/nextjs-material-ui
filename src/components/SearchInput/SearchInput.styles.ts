import { CSSObject, Theme, styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import type { SearchInputProps, SearchInputVariant } from './SearchInput';

type Mixin = (theme?: Theme, value?: string) => CSSObject;
type InputVariantRecord = Record<SearchInputVariant, Mixin>;
type InputVariant = {
	root: InputVariantRecord;
	input: InputVariantRecord;
	focus: InputVariantRecord;
};

const fullWidthMixin: Mixin = () => ({ width: '100%' });

const fixedRootMixin: Mixin = () => ({});
const fixedInputMixin: Mixin = () => ({ width: 'auto' });
const fixedFocusMixin: Mixin = () => ({ width: 'auto' });

const resizableRootMixin: Mixin = (_theme, value) => ({
	cursor: 'pointer',
	gap: value ? 'auto' : 0,
	padding: '0 11px',
});

const resizableInputMixin: Mixin = (theme, value) => ({
	width: value ? 329 : 0,
	height: theme?.spacing(2.5),
	padding: '9px 0',
});

const resizableFocusMixin: Mixin = () => ({
	width: 329,
});

const inputVariantMixin: InputVariant = {
	root: { fixed: fixedRootMixin, resizable: resizableRootMixin },
	input: { fixed: fixedInputMixin, resizable: resizableInputMixin },
	focus: { fixed: fixedFocusMixin, resizable: resizableFocusMixin },
};

export const StyledInputBase = styled(InputBase, {
	shouldForwardProp: prop => prop !== 'fullWidth' && prop !== 'variant',
})<SearchInputProps>(props => {
	const { theme, fullWidth } = props;
	const variant = props.variant as SearchInputVariant;
	const value = props.value as string;

	return {
		...inputVariantMixin.root[variant](theme, value),

		'& .MuiInputBase-input': {
			...(fullWidth && { ...fullWidthMixin() }),
			...inputVariantMixin.input[variant](theme, value),

			transition: theme.transitions.create('width'),

			'&:focus': {
				...inputVariantMixin.focus[variant](theme),

				cursor: 'auto',
			},
		},
	};
});
