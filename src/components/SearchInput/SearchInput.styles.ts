import { CSSObject, Theme, styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import type { SearchInputProps, SearchInputVariant } from './SearchInput';

type Mixin = (theme?: Theme, props?: SearchInputProps) => CSSObject;
type InputVariantRecord = Record<SearchInputVariant, Mixin>;
type InputVariant = {
	root: InputVariantRecord;
	input: InputVariantRecord;
	focus: InputVariantRecord;
};

const fullWidthMixin: Mixin = () => ({ width: '100%' });

const fixedRootMixin: Mixin = () => ({});

const fixedInputMixin: Mixin = (_theme, props) => ({
	width: props?.width || 'auto',
});

const fixedFocusMixin: Mixin = (_theme, props) => ({
	width: props?.width || 'auto',
});

const resizableRootMixin: Mixin = (_theme, props) => ({
	cursor: 'pointer',
	gap: props?.value ? 'auto' : 0,
	padding: '0 11px',
});

const resizableInputMixin: Mixin = (theme, props) => ({
	width: props?.value ? 329 : 0,
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
	shouldForwardProp: prop => prop !== 'fullWidth' && prop !== 'variant' && prop !== 'width',
})<SearchInputProps>(({ theme, ...props }) => {
	const variant = props.variant as SearchInputVariant;

	return {
		...inputVariantMixin.root[variant](theme, props),

		'& .MuiInputBase-input': {
			...(props.fullWidth && { ...fullWidthMixin() }),
			...inputVariantMixin.input[variant](theme, props),

			transition: theme.transitions.create('width'),

			'&:focus': {
				...inputVariantMixin.focus[variant](theme, props),

				cursor: 'auto',
			},
		},
	};
});
