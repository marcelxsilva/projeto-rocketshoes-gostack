import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import store from './store';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
