import React from 'react';
import { TextField } from '@material-ui/core';

export default function InputSimple(props) {
  return (
    <TextField
      {...props}
      variant="outlined"
    />
  );
}
