import { createStore } from 'redux';
import Reducers from './modules/rootReducer';
const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : ''
export default createStore(Reducers, enhancer);