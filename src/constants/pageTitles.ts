import routes from './routes';

export type PageTitleType = Readonly<{
	[Property in keyof typeof routes]: string;
}>;

const titles: PageTitleType = {
	dashboard: 'Your dashboard',
	availableUnits: 'Available units',
	unitDetails: '',
	settings: 'Settings',
	helpCenter: 'Help center',
};

export default titles;
