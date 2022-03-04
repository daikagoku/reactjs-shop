import {memo,createContext} from 'react';
export const HeaderSearchContext = createContext();
function HeaderSearchProvider({children,...props}){
	return(
		<HeaderSearchContext.Provider value={null}>
			{children}
		</HeaderSearchContext.Provider>
	)
}
export default memo(HeaderSearchProvider);