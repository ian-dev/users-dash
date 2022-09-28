import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
/*import settingsReducer, {
	reducerName as settingsReducerName,
} from './slices/settings';*/
import { usersApi } from './api';

const defaultStoreConfig = {
	reducer: {
		//[settingsReducerName]: settingsReducer,
		// -------------------------------------
		// Add the generated reducer as a specific top-level slice
		// -------------------------------------
		[usersApi.reducerPath]: usersApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(usersApi.middleware)
};

export const store = configureStore({
	...defaultStoreConfig,
});

export const testStore = (preloadedState) => {
	return configureStore({
		...defaultStoreConfig,
		preloadedState,
	});
};

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
