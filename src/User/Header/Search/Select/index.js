import {memo,useState} from 'react';
import clsx from 'clsx';
import {} from 'react-bootstrap';
import {Grid,Select,MenuItem} from '@mui/material/';
import styles from './styles.module.css';
function HeaderSearchSelect({...props}){
  const argsSelect=["Sản phẩm","Danh mục","Tin tức","Chủ đề"];
  const [personName, setPersonName] = useState(argsSelect[0]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  return(
    <Grid item {...props}>
      <Select
            className={clsx(styles.select)}
            fullWidth
            value={personName}
            onChange={handleChange}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }
              return selected;
            }}
            variant="standard"
      >
            {
              argsSelect.map(function(value,index){
                return(<MenuItem value={value} key={index}>{value}</MenuItem>)
              })
            }
      </Select>
    </Grid>
  )
}
export default memo(HeaderSearchSelect);