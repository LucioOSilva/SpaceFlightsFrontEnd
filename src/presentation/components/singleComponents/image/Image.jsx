import React from 'react';
import PropTypes from 'prop-types';

export default function Image(props) {
  const { path } = props;
  return (
    <img src={path} alt="img" {...props} />
  );
}

Image.propTypes = {
  path: PropTypes.string.isRequired,
};
