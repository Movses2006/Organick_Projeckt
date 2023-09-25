import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Route from './Routes/Routes';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;