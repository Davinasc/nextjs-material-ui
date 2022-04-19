import { useContext } from 'react';

import { AppLayoutContext } from './AppLayoutProvider';

export default function useAppLayoutProvider() {
	const context = useContext(AppLayoutContext);

	if (!context) {
		throw new Error('useAppLayoutProvider needs to be used inside AppLayoutProvider');
	}

	return context;
}
