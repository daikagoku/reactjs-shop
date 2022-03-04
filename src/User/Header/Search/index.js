import {memo,useState} from 'react';
import clsx from 'clsx';
import {} from 'react-bootstrap';
import styles from './styles.module.css';
import {Box,Grid} from '@mui/material';


import SearchInput from "./Input/";
import SearchSelect from "./Select/";
import SearchSubmit from "./Submit/";

function HeaderSearch({...props}){
  return(
  <Grid item {...props}>
    <Grid container 
          className={clsx(styles.group)} 
          alignItems="stretch" 
          columnSpacing={1}
    >
      <SearchInput xs/>
      <SearchSelect xs={3}/>
      <SearchSubmit/>
    </Grid>
  </Grid>
  )
}
export default memo(HeaderSearch);