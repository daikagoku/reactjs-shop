import {memo,useState} from 'react';
import clsx from 'clsx';
import {} from 'react-bootstrap';
import {Grid,TextField} from '@mui/material/';
import styles from './styles.module.css';
function HeaderSearchInput({...props}){
  const argsSelect=["Sản phẩm","Danh mục","Tin tức","Chủ đề"];
  const [personName, setPersonName] = useState(argsSelect[0]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  return(
    <Grid item {...props}>
      <TextField
        fullWidth
        InputProps={{
          disableUnderline: true,
          className:clsx(styles.input)
        }}
        placeholder="Search"
        variant="standard"
      />
    </Grid>
  )
}
export default memo(HeaderSearchInput);