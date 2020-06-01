import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomInput from "components/CustomInput/CustomInput.js";
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%",
    marginTop:"5%",
    // borderBottom:"1px solid red "
  },
}));

export default function DatePickers(props) {
    const classes = useStyles();

  return (
      <>
      <TextField
          id={props.id}
          value={props.value}
          label={props.label}
          type={props.type}
          className={classes.textField}
        />
        <FormHelperText style={{color:'red',marginLeft:'2%'}}>{props.hyperText}</FormHelperText>
      </>
  );
}
