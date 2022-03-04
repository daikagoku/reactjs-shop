import {memo} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import styles from './styles.module.css';

import HeaderCart from "./Cart/";
import HeaderSetting from "./Setting/";
import HeaderProfile from "./Profile/";
function HeaderOption({...props}){
  return(
  <Grid item {...props}>  
    <Grid container 
        alignItems="center" 
        className={clsx(styles.container)}
        columnSpacing={1}
    >
      <HeaderCart />
      <HeaderSetting />
      <HeaderProfile />
    </Grid>
  </Grid>
  )
}
export default memo(HeaderOption)