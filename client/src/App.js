import AppNavbar from './components/AppNavbar';
import { useEffect } from 'react';
import { Container } from 'reactstrap';
import DeckList from './components/deckList/DeckList';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GuestRoute from './components/routes/GuestRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  console.log(store);
  return (
    <Provider store={store}>
      <div>
        <AppNavbar></AppNavbar>
        <Container>
          <Router>
            <Switch>
              <GuestRoute exact path="/">
                <div>HOME</div>
              </GuestRoute>
              <ProtectedRoute exact path="/decks">
                <DeckList></DeckList>
              </ProtectedRoute>
            </Switch>
          </Router>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
