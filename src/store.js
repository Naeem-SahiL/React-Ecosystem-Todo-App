import { createStore, combineReducers, applyMiddleware } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todos, isLoading } from './todos/reducers';

const reducers = {
    todos,
    isLoading,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persisitedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persisitedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);