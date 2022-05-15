import { useRef } from 'react';
import type { InputBaseProps } from '@mui/material';
import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
// styled components
import { StyledInputBase } from './SearchInput.styles';

export type SearchInputVariant = 'fixed' | 'resizable';

export interface SearchInputProps extends InputBaseProps {
	variant?: SearchInputVariant;
	value?: string;
	setValue?: (value: string) => void;
	width?: number;
}

export default function SearchInput(props: SearchInputProps) {
	const { variant = 'fixed', value = '', setValue, width, ...otherProps } = props;
	const inputRef = useRef<HTMLInputElement>(null);

	const adornmentClickHandler = () => {
		if (!inputRef?.current) return;
		if (value) setValue?.('');
		inputRef.current.focus();
	};

	return (
		<StyledInputBase
			{...otherProps}
			inputRef={inputRef}
			value={value as string}
			variant={variant}
			width={width}
			type="search"
			placeholder="Search…"
			inputProps={{ 'aria-label': 'search' }}
			endAdornment={
				value ? (
					<CloseIcon onClick={adornmentClickHandler} />
				) : (
					<SearchIcon onClick={adornmentClickHandler} />
				)
			}
		/>
	);
}
