import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './userSlice'
import counterSlice from './counterSlice'
// import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  count: counterSlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat()
})

export const persistor = persistStore(store);

// getDefaultMiddleware - adds redux-thunk by default

// WITHOUT redux-persist

// const rootReducer = combineReducers({
//   user: userReducer,
//   count: counterSlice
// });

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     count: counterSlice
//   },
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false
//   }).concat()
// })
