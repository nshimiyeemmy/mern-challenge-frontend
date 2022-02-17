import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/index.css';
import App from '@/App';

import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Helmet
        defaultTitle='MERN Challenge Frontend'
        titleTemplate='%s | MERN Challenge Frontend'
      >
        <meta charSet='utf-8' />
        <html lang='id' amp />
      </Helmet>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
