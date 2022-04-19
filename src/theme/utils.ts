import { drawerWidth } from './layout';

export function getDrawerWidth(open: boolean) {
	return open ? drawerWidth.opened : drawerWidth.closed;
}
