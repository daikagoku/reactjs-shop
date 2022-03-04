import {memo} from 'react';
import clsx from 'clsx';
import {Box,Container,Grid} from '@mui/material/';


import styles from './styles.module.css';

import HeaderLogo from "./Logo/";
import HeaderSearch from "./Search/";
import HeaderOption from "./Option/";
import HeaderMenu from "./Menu/";

function Header({...props}){
  return(
    <Box className={clsx(styles.header)}>
      <Container>
        <Grid container alignItems="center" columnSpacing={3}>
          <HeaderLogo 
            xs={4}
            lg={2}
          />
          <HeaderSearch
            xs={12}
            lg={8}
          />
          <HeaderOption
            xs={8}
            lg={2}
          />
        </Grid>
      </Container>
    </Box>
  )
}
export default memo(Header);