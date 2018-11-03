# React Redux Immutable

React Redux Immutable bindings with 0 dependency

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat)](https://opensource.org/licenses/MIT) [![npm: react-redux-immutable](https://img.shields.io/npm/v/react-redux-immutable.svg?style=flat)](https://www.npmjs.com/package/react-redux-immutable) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style-flat)](https://lernajs.io/)


## Installation

React Redux Immutable relies on peer dependencies, it requires **React 0.14 or later**, **Redux 2 or later**, **React Redux 5 or later** and **Immutable 3** already installed.

```
npm install --save react-redux-immutable
```

## Usage

### `connect`

React Redux Immutable provides a drop-in replacement of React Redux `connect` function.

Replace

```javascript
import { connect } from 'react-redux';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be left unchanged
  {
    /* actions */
  },
)(myReactComponent); // This component might receive Immutable props
```

with

```javascript
import { connect } from 'react-redux-immutable';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be transformed
  {
    /* actions */
  },
)(myReactComponent); // This component will receive JavaScript props
```

or with optional filter list

```javascript
import { connect } from 'react-redux-immutable';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be transformed
  {
    /* actions */
  },
)(myReactComponent, ['myPropKey']); // This component will receive JavaScript props
```

### `toJS`

If you want more control over your connect logic, you can use `toJS` function, as seen on [Redux documentation](https://redux.js.org/recipes/usingimmutablejs#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux)

In addition to your usual connect implementation

```javascript
import { connect } from 'react-redux';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be left unchanged
  {
    /* actions */
  },
)(myReactComponent); // This component might receive Immutable props
```

add the following

```javascript
import { connect } from 'react-redux';
import { toJS } from 'react-redux-immutable';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be transformed
  {
    /* actions */
  },
)(toJS(myReactComponent)); // The wrapped component will receive JavaScript props
```

and with optional filter list

```javascript
import { connect } from 'react-redux';
import { toJS } from 'react-redux-immutable';

//...

export default connect(
  mapStateToProps, // Returned Immutable props will be transformed
  {
    /* actions */
  },
)(toJS(myReactComponent, ['myPropKey'])); // The wrapped component will receive JavaScript props
```

### Tree-shaking

The `toJS` and `connect` functions can be imported directly from `react-redux-immutable/to-js` and `react-redux-immutable/connect` respectively.

## Authors

The implementation of this module is coming from [Redux documentation](https://redux.js.org/recipes/usingimmutablejs#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux) example of Higher Order Component used to convert Immutable.JS props into JavaScript props based on [cpsubrian gist](https://gist.github.com/cpsubrian/79e97b6116ab68bd189eb4917203242c#file-tojs-js).
