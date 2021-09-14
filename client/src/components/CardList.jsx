import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCards, deleteCard } from '../actions/cardActions';
import '../styles/cardList.css';
import PropTypes from 'prop-types';

function CardList({ getCards, card, deleteCard }) {
  useEffect(() => {
    getCards();
  }, []);

  const deleteClick = (id) => {
    deleteCard(id);
  };
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="card-list">
          {card.cards.map(({ id, title }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="me-3"
                  color="danger"
                  size="sm"
                  onClick={() => deleteClick(id)}
                >
                  &times;
                </Button>
                {title}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

CardList.propTypes = {
  getCards: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  card: state.card
});

export default connect(mapStateToProps, { getCards, deleteCard })(CardList);
