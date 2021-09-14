import AppNavbar from './components/AppNavbar';
import CardList from './components/CardList';
import CardModal from './components/CardModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar></AppNavbar>
        <CardModal></CardModal>
        <CardList></CardList>
      </div>
    </Provider>
  );
}

export default App;
