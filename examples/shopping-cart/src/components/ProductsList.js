import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

ProductsList.defaultProps = {
  children: null,
};

export default ProductsList;
