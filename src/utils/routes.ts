import routes, { DefaultRoute } from '@app/constants/routes';
import pageTitles from '@app/constants/pageTitles';

export function getPageTitleByPathname(pathname: string) {
	const route = Object.entries(routes).find(
		([, value]) => (value as DefaultRoute).href === pathname
	);

	if (!route) return undefined;

	const routeKey = route[0] as keyof typeof routes;

	return pageTitles[routeKey];
}
