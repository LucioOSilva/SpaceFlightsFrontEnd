import React, { useState } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function InputSelector(props) {
  const { menuList, classNameStyle } = props;
  const [current, setCurrent] = useState(menuList[0]);

  return (
    <TextField
      select
      variant="outlined"
      value={current}
      className={classNameStyle}
      onChange={({ target }) => { setCurrent(target.value); }}
    >
      {menuList.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

InputSelector.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.string).isRequired,
  classNameStyle: PropTypes.string.isRequired,
};
