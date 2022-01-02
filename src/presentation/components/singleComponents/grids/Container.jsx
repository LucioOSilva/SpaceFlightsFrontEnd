import React from 'react';
import PropTypes from 'prop-types';

export default function Container(props) {
  const { children } = props;

  return (
    <div
      {...props}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
