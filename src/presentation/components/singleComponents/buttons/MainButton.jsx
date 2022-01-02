import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function MainButton(props) {
  const { children } = props;

  return (
    <Button
      variant="contained"
      color="secondary"
      style={{ textTransform: 'capitalize' }}
      {...props}
    >
      {children}
    </Button>
  );
}

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
};
