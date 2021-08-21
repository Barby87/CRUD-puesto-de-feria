// Creando store principal
import { createStore, combineReducers, compose } from 'redux';
import productReducer from './products';

// Vinculando Redux con DevTools
declare global {
    interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    products: productReducer,
});

const store = createStore(
    rootReducer,
    // Middleware que intercepta lo que hace el createStore y analiza todo lo que hace el store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;