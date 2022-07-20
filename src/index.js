import App from './App';
import React from 'react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import {createRoot} from 'react-dom/client';

const store = configureStore();
const persistor = persistStore(store);

const loading = <div>Loading...</div>;

function RootComponent() {
    return (
        <Provider store={store}>
            <PersistGate loading={loading} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

// ReactDOM.render(<RootComponent />, document.getElementById('root'));

createRoot(document.getElementById('root'))
.render(<RootComponent />)