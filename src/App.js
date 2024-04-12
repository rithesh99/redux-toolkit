import './App.css';
import Header from './Header';
import AddUser from './AddUser';
import RemoveUser from './RemoveUser';
import Users from './Users';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Count from './Count';
import Hooks from './Hooks';

export default function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Hooks />
          <Header />
          <AddUser />
          <RemoveUser />
          <Users />
          <Count />
        </PersistGate>
      </Provider>
    </div>
  );
}
