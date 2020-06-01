import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
    marginTop:"5%"
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
      <>
      <TextField
        id={props.id}
        label={props.label}
        type="date"
        value={props.value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormHelperText style={{color:'red',marginLeft:'2%'}}>{props.hyperText}</FormHelperText>
      </>
  );
}
