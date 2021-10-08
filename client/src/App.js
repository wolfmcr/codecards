import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { useEffect } from 'react';
import { Container } from 'reactstrap';
import DeckList from './components/deckListComponents/DeckList';
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

  return (
    <Provider store={store}>
      <AppNavbar />
      <Container>
        <Router>
          <Switch>
            <GuestRoute exact path="/">
              <Landing />
            </GuestRoute>
            <ProtectedRoute exact path="/decks">
              <DeckList />
            </ProtectedRoute>
          </Switch>
        </Router>
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
