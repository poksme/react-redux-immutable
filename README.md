# React Redux Immutable
React Redux Immutable bindings with 0 dependency

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
import { connect } from 'react-redux'

//...

export default connect(
  mapStateToProps, // This should not return any Immutable props
  { /* actions */ }
)(myReactComponent)
```
with
```javascript
import { connect } from 'react-redux-immutable'

//...

export default connect(
  mapStateToProps, // This can return Immutable props
  { /* actions */ }
)(myReactComponent) // This component will receive JavaScript props
```

### `toJS`

If you want more control over your connect logic, you can use `toJS` function, as seen on [Redux documentation](https://redux.js.org/recipes/usingimmutablejs#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux)

In addition to your usual connect implementation
```javascript
import { connect } from 'react-redux'

//...

export default connect(
  mapStateToProps, // This should not return any immutable props
  { /* actions */ }
)(myReactComponent)
```
add the following
```javascript
import { connect } from 'react-redux'
import { toJS } from 'react-redux-immutable'

//...

export default connect(
  mapStateToProps, // This can return Immutable props
  { /* actions */ }
)(toJS(myReactComponent)) // The wrapped component will receive JavaScript props
```

## Authors

The implementation of this module is coming from [Redux documentation](https://redux.js.org/recipes/usingimmutablejs#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux) example of Higher Order Component used to convert Immutable.JS props into JavaScript props based on [cpsubrian gist](https://gist.github.com/cpsubrian/79e97b6116ab68bd189eb4917203242c#file-tojs-js).
