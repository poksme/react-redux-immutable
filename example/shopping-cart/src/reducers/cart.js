import { Map, OrderedSet } from 'immutable';

import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = Map({
  addedIds: OrderedSet([]),
  quantityById: Map({}),
});

const addedIds = (state = initialState.get('addedIds'), action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log({ state });
      if (state.has(action.productId)) {
        return state
      }
      return state.add(action.productId);
    default:
      return state
  }
}

const quantityById = (state = initialState.get('quantityById'), action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return state.set(productId, state.get(productId, 0) + 1)
      // return { ...state,
      //   [productId]: (state[productId] || 0) + 1
      // }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.getIn(['quantityById', productId], 0);

export const getAddedIds = state => state.get('addedIds');

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return Map({
        addedIds: addedIds(state.get('addedIds'), action),
        quantityById: quantityById(state.get('quantityById'), action)
      });
  }
}

export default cart
