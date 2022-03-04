import {memo,createContext} from 'react';
export const UserPageContext = createContext();
function UserPageProvider({children,...props}){
	return(
		<UserPageContext.Provider value={[]}>
			{children}
		</UserPageContext.Provider>
	)
}
export default memo(UserPageProvider);