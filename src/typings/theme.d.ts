import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		body3: React.CSSProperties;
		labelLg: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		body3?: React.CSSProperties;
		labelLg?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body3: true;
		labelLg: true;
	}
}
