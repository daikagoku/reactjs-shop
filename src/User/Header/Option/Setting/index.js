import {memo,useState} from 'react';
import clsx from 'clsx';
import {Button,Offcanvas} from 'react-bootstrap';
import {Grid,IconButton,Tooltip} from '@mui/material/';
import { BsFillGearFill} from 'react-icons/bs';
import styles from './styles.module.css';
function HeaderSetting({...props}){
  const [isShow, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => setShow(!isShow);
  return(
    <Grid item>
      <Tooltip title="Tùy chọn" placement="top">
        <IconButton color="inherit" onClick={toggleShow} className="me-2">
          <BsFillGearFill />
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
export default memo(HeaderSetting);