import routes from './routes';

export type PageTitleType = Readonly<{
	[Property in keyof typeof routes]: string;
}>;

const titles: PageTitleType = {
	dashboard: 'Your Dashboard',
	availableUnits: 'Available Units',
	unitDetails: '',
};

export default titles;
