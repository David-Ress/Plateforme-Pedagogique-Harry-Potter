/* eslint-disable import/no-extraneous-dependencies */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
