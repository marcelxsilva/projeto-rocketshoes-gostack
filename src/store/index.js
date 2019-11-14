import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development' ?
    compose(console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
    )
    : applyMiddleware(sagaMiddleware);

const store = createStore(Reducers, enhancer); 
sagaMiddleware.run(rootSaga)

export default store; 