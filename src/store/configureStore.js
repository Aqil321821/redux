import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import reducer from './tasks';
import { thunk } from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
