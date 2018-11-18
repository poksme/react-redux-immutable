import React from 'react';
import { Iterable } from 'immutable';

const KEY = 0;
const VALUE = 1;

export const mapComponentProps = (
  componentProps = {},
  filterList = [],
  isBlacklist = true,
) => Object.entries(
  componentProps,
).reduce((newProps, wrappedComponentProp) => {
  // see https://github.com/eslint/eslint/issues/8581
  newProps[wrappedComponentProp[KEY]] = ( // eslint-disable-line no-param-reassign
    Iterable.isIterable(wrappedComponentProp[VALUE])
    && (
      (isBlacklist === true // Blacklist, prop should not be included
        && (!filterList || !filterList.includes(wrappedComponentProp[KEY])))
      || (isBlacklist === false // Whitelist, props should be included
        && filterList && filterList.includes(wrappedComponentProp[KEY]))
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
  );
  return newProps;
}, {});

export default (
  WrappedComponent,
  filterList = [],
  isBlacklist = true,
) => (wrappedComponentProps) => {
  const propsJS = mapComponentProps(wrappedComponentProps, filterList, isBlacklist);

  return React.createElement(WrappedComponent, propsJS);
};
