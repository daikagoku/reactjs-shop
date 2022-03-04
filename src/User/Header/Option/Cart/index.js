import {memo,useState} from 'react';
import clsx from 'clsx';
import {Button,Offcanvas} from 'react-bootstrap';
import { BsFillCartFill} from 'react-icons/bs';

import {Grid,IconButton,Tooltip,Badge} from '@mui/material/';

import styles from './styles.module.css';
function HeaderCart({...props}){
  const [isShow, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => setShow(!isShow);
  return(
    <Grid item>
      <Tooltip title="Giỏ hàng" placement="top">
        <IconButton color="inherit" onClick={toggleShow}>
          <Badge badgeContent={4} color="primary" max={99}>
            <BsFillCartFill color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Offcanvas show={isShow} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Grid>
  )
}
export default memo(HeaderCart);