import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ price, quantity, title }) => (
  <div>
    {title}
    {' '}
- &#36;
    {price}
    {quantity ? ` x ${quantity}` : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

Product.defaultProps = {
  price: null,
  quantity: null,
  title: null,
};

export default Product;
