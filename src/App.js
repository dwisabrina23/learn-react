import Router from './router';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
              <Router/>
            </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
