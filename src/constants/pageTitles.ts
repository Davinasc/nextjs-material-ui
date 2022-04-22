import routes from './routes';

export type PageTitleType = Readonly<{
	[Property in keyof typeof routes]: string;
}>;

export default {
	dashboard: 'Your Dashboard',
	availableUnits: 'Available Units',
	unitDetails: '',
} as PageTitleType;
