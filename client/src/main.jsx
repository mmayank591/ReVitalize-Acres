import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistor,store}  from './redux/store.js';//persistor: This is an instance of the Redux persist Persistor object. It's responsible for persisting and rehydrating the Redux store's state according to the configuration set in persistConfig
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';//PersistGate: This is a React component provided by redux-persist/integration/react. It's used to delay the rendering of your application's UI until the persisted state has been retrieved and rehydrated. 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
)
