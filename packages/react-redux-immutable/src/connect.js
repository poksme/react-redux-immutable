import { connect as reactReduxConnect } from 'react-redux';
import toJS from './to-js';

export default (...connectVargs) => (...toJsVargs) => (
  reactReduxConnect(...connectVargs)(toJS(...toJsVargs))
);
