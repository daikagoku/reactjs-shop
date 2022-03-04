import {memo} from 'react';
import clsx from 'clsx';
import {} from 'react-bootstrap';
import {Grid,Button} from '@mui/material/';
import { FaSearch } from 'react-icons/fa';
import styles from './styles.module.css';
function HeaderSearchSubmit({...props}){
  return(
  <Grid item {...props}>
    <Button variant="contained" className={clsx(styles.button)}>
        <FaSearch />
    </Button>
  </Grid>
  )
}
export default memo(HeaderSearchSubmit);