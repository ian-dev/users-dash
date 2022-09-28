import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store as reduxStore } from './utils/store';
import App from './App';
import './index.css';

/**
 *
 * @param children
 * @param reduxStore
 */
 export function AppProviders({
	children,
	reduxStore,
}) {
	return (<ReduxProvider store={reduxStore}>
      {children}
	</ReduxProvider>);
 }

/**
 *
 * MSW server
 */ 

if (process.env.NODE_ENV === 'development') {
	const { worker } = require('./utils/browser');
	worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppProviders reduxStore={reduxStore}>
     <App />
</AppProviders>);