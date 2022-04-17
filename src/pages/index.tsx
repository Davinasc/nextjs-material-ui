import Head from 'next/head';
import { Grid, Typography } from '@mui/material';

export default function Home() {
	return (
		<div>
			<Head>
				<title>NextJS + MUI</title>
				<meta name="description" content="NextJS + MUI by Davi Nascimento" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Grid container justifyContent="center">
					<Typography variant="h2">Hello World ✌️</Typography>
				</Grid>
			</main>
		</div>
	);
}
