// utility file
import App from './App';
import * as serviceWorker from './serviceWorker';

// // css file
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import './index.css';
import 'fontawesome-4.7/css/font-awesome.min.css';

// redux'
import { actionCreators, composeWithDevTools } from 'redux-devtools-extension';

// redux sagas
import createSagaMiddleware from 'redux-saga';
import {watchInitDataTransaction,watchInitDataUsers, watchUserDeposit, watchLoginUser,watchUserWithdraw} from './store/sagas'

// redux reducer
import uiOptions from './store/reducers/uiOptions';
import userData from './store/reducers/tables-data/user-data'
import transactionData from './store/reducers/tables-data/transaction-data'
import userLogin from './store/reducers/user'

const reducersCombine = combineReducers({
  ui: uiOptions,
  user: userData,
  transaction: transactionData,
  userLogin:  userLogin
})

const composeEnhancers = composeWithDevTools({ actionCreators, trace: true })
const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducersCombine, 
  composeEnhancers(
    applyMiddleware(sagaMiddleWare)
    )
  )

  sagaMiddleWare.run(watchLoginUser)
  sagaMiddleWare.run(watchUserDeposit)
  sagaMiddleWare.run(watchInitDataTransaction)
  sagaMiddleWare.run(watchInitDataUsers)
  sagaMiddleWare.run(watchUserWithdraw)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
