import React from 'react';
import { Iterable } from 'immutable';

const KEY = 0;
const VALUE = 1;

export const mapComponentProps = (componentProps = {}, ignoreList = []) => Object.entries(
  componentProps,
).reduce((newProps, wrappedComponentProp) => {
  // see https://github.com/eslint/eslint/issues/8581
  newProps[wrappedComponentProp[KEY]] = ( // eslint-disable-line no-param-reassign
    Iterable.isIterable(wrappedComponentProp[VALUE])
    && !Array.prototype.includes.call(ignoreList, wrappedComponentProp[KEY])
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
  );
  return newProps;
}, {});

export default (WrappedComponent, ignoreList = []) => (wrappedComponentProps) => {
  const propsJS = mapComponentProps(wrappedComponentProps, ignoreList);

  return React.createElement(WrappedComponent, propsJS);
};
