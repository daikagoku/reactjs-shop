import {memo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import UserPageProvider from "./provider";

import Header from "./Header/";

function UserPage({...props}){
  return(
    <UserPageProvider>
      <Header />
    </UserPageProvider>
  )
}
export default memo(UserPage);