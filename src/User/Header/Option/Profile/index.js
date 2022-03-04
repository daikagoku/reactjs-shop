import {memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Button,Offcanvas} from 'react-bootstrap';
import { BsPersonFill} from 'react-icons/bs';
import {Grid,IconButton,Tooltip,Avatar,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
function HeaderProfile({...props}){
  const [isShow, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => setShow(!isShow);
  const [isLoading, setLoading] = useState(true);
  const handleLoad = useMemo(function(){
      let timeOut = null;
      return function(event){
        timeOut = setTimeout(function(){
          setLoading(false);
        },500)
      }
      return function(){
        clearTimeout(timeOut);
      }
    },[isLoading]);
  return(
    <Grid item>
      <Tooltip title="Thông tin" placement="top">     
          <IconButton color="inherit" onClick={toggleShow}>
            <Avatar 
              onLoad={handleLoad} 
              alt="avatar"
              imgProps={{loading:"lazy"}}
            >
              {isLoading
                && (<Skeleton 
                  variant="circular" 
                  className={clsx(styles.skeleton)}
                          
                />)
                || <BsPersonFill />
              }
            </Avatar>
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
export default memo(HeaderProfile);