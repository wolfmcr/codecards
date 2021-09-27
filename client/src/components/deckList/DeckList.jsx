import React, { useEffect } from 'react';
import StudyModal from '../study/StudyModal';
import NewDeckModal from '../deckFormComponents/NewDeckModal';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import DeleteDeckModal from './DeleteDeckModal';
import { deleteDeck } from '../../actions/deckActions';
function DeckList(props) {
  useEffect(() => {}, [props.decks, props.cards]);
  return (
    <div>
      {props.decks[0] ? (
        <>
          <h3>Decks</h3>
          <ListGroup>
            {props.decks.map((deck) => (
              <ListGroupItem className="d-flex justify-content-center">
                <div style={{ width: '50%' }}>
                  <h6>{deck.deckName}</h6>
                </div>

                <div
                  style={{ width: '50%', textAlign: 'end' }}
                  className="d-flex justify-content-end"
                >
                  {props.cards.filter((card) => card.deck === deck._id).length >
                    0 && (
                    <StudyModal
                      deck={deck.deckName}
                      card={props.cards.filter(
                        (card) => card.deck === deck._id
                      )}
                    ></StudyModal>
                  )}
                  <span className="ms-3">
                    Cards:{' '}
                    {
                      props.cards.filter((card) => card.deck === deck._id)
                        .length
                    }
                  </span>
                  <div className="ms-3">
                    <DeleteDeckModal
                      deck={deck.deckName}
                      deleteDeck={props.deleteDeck}
                      deckId={deck._id}
                    ></DeleteDeckModal>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </>
      ) : (
        <h1>You haven't added any decks yet.</h1>
      )}

      <NewDeckModal></NewDeckModal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  decks: state.auth.user.decks,
  cards: state.auth.user.cards
});

export default connect(mapStateToProps, { deleteDeck })(DeckList);
