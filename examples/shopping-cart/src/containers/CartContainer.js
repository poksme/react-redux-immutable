import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux-immutable/connect';
import { checkout as checkoutAction } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, checkout }) => (
  <Cart products={products} total={total} onCheckoutClicked={() => checkout(products)} />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
};

CartContainer.defaultProps = {
  total: null,
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(
  mapStateToProps,
  { checkout: checkoutAction },
)(CartContainer);
