import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import history from './services/history';

import GlobalStyle from './styles/global';
import store from './store';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
