import createSagaMiddleWare from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers/index'
import rootSaga from './sagas/rootSaga';
const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
    reducer: {reducers},
    middleware: [sagaMiddleWare]
})
sagaMiddleWare.run(rootSaga);

export default store;