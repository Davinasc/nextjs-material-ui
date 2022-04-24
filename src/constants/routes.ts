export type DefaultRoute = Readonly<{ href: string }>;
export type ParamsRoute = DefaultRoute & Readonly<{ as: string }>;

export default {
	dashboard: { href: '/' } as DefaultRoute,
	availableUnits: { href: '/available-units' } as DefaultRoute,
	unitDetails: (id: string): ParamsRoute => ({
		href: '/available-units/[id]',
		as: `/available-units/${id}`,
	}),
	settings: { href: '/settings' } as DefaultRoute,
	helpCenter: { href: '/help-center' } as DefaultRoute,
};
