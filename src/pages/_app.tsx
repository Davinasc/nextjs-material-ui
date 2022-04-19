import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '@app/utils/createEmotionCache';

import AppLayout from '@app/components/AppLayout/AppLayout';
import { theme } from '@app/theme/index';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	// Includes a client-side cache, shared for the whole session of the user in the browser.
	const { Component, emotionCache = createEmotionCache(), pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />

				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</ThemeProvider>
		</CacheProvider>
	);
}
