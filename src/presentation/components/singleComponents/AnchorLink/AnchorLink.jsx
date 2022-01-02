import React from 'react';
import PropTypes from 'prop-types';

export default function AnchorLink(props) {
  const { children } = props;
  return (
    <a {...props} style={{ textDecoration: 'none' }}>{ children }</a>
  );
}

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
};
