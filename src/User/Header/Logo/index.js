import {memo} from 'react';
import clsx from 'clsx';
import {} from 'react-bootstrap';
import styles from './styles.module.css';
import{ Link }from'react-router-dom';
import Logo from '../../../logo.png';
import {Grid} from '@mui/material/';
import {Image,Frame} from "../../../Components/";

function HeaderLogo({...props}){
  return(
  <Grid item {...props}>
    <Frame component={Link} className={clsx(styles.button)} to="/">
        <Image contain className={clsx(styles.image)} src={Logo} alt="logo" />
    </Frame>
  </Grid>
  )
}
export default memo(HeaderLogo);