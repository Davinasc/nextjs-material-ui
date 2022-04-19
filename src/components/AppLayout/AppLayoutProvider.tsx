import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface AppLayoutContextType {
	toggleDrawer: () => void;
	open: boolean;
}

export const AppLayoutContext = createContext<AppLayoutContextType | null>(null);
AppLayoutContext.displayName = 'AppLayoutContext';

export default function AppLayoutProvider({ children }: PropsWithChildren<unknown>) {
	const [open, setOpen] = useState(false);

	function toggleDrawer() {
		setOpen(isOpen => !isOpen);
	}

	const context = useMemo(() => ({ open, toggleDrawer }), [open]);

	return <AppLayoutContext.Provider value={context}>{children}</AppLayoutContext.Provider>;
}
