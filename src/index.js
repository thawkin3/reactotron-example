import './ReactotronConfig';
import Reactotron from 'reactotron-react-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const store = Reactotron.createStore(reducers, {}, compose(applyMiddleware(reduxThunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();