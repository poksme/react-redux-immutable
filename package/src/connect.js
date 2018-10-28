import { connect as reactReduxConnect } from 'react-redux';
import toJS from './to-js';

export default (...vargs) => reactComponent => reactReduxConnect(...vargs)(toJS(reactComponent));
