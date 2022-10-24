import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filesReducer } from "./slices/files/files";
import { darkModeReducer } from "./slices/dark-mode/darkMode";

const persistConfig = {
    key: 'root',
    storage,
};

const combinedReducers = combineReducers({
    darkMode: darkModeReducer,
    files: filesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;