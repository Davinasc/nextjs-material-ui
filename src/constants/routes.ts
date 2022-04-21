type IParamsRouter = { href: string; as: string };

export default {
	dashboard: '/',
	availableUnits: '/available-units',
	unitDetails: (id: string): IParamsRouter => ({
		href: '/available-units/[id]',
		as: `/available-units/${id}`,
	}),
};
