import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { NativeSelect } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width:"100%",
  },
  select:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
      width:"95%",
      height:"50px",    
  }
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
  <div >
      <FormControl className={classes.formControl}>
        <InputLabel id="label">{props.label}</InputLabel>
        <NativeSelect
          labelId="1"
          id={props.id}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          className={classes.select}
        >
        <option value="Select"></option>
        <option value="1"> asd</option> 
        <option value="2">asdf</option> 
        <option value="3">asdfasdf</option> 
         </NativeSelect>
        <FormHelperText style={{color:'red',marginLeft:'1%'}}>{props.hyperText}</FormHelperText>
      </FormControl>
    </div>    
  );
}

