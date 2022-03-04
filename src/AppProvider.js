import {memo,createContext} from 'react';
import clsx from 'clsx';
export const AppContext = createContext({});
function AppProvider({children,...props}){
	return(
		<AppContext.Provider value={[]}>
			{children}
		</AppContext.Provider>
	)
}
export default memo(AppProvider);