import React from 'react';
import { Iterable } from 'immutable';

export default WrappedComponent => (wrappedComponentProps) => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(
    wrappedComponentProps,
  ).reduce((newProps, wrappedComponentProp) => {
    // see https://github.com/eslint/eslint/issues/8581
    newProps[wrappedComponentProp[KEY]] = ( // eslint-disable-line no-param-reassign
      Iterable.isIterable(wrappedComponentProp[VALUE])
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE]
    );
    return newProps;
  }, {});

  return React.createElement(WrappedComponent, propsJS);
};
