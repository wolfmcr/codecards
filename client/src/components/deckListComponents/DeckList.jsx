import React, { useEffect } from 'react';
import StudyModal from '../study/StudyModal';
import NewDeckModal from '../addDeckComponents/NewDeckModal';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import ActionMenu from './actionMenu/ActionMenu';

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
                <div style={{ width: '75%' }}>
                  <h6>{deck.deckName}</h6>
                </div>

                <div
                  style={{ width: '25%' }}
                  className="d-flex justify-content-end"
                >
                  <span>
                    Cards:{' '}
                    {
                      props.cards.filter((card) => card.deck === deck._id)
                        .length
                    }
                  </span>
                  {props.cards.filter((card) => card.deck === deck._id).length >
                    0 && (
                    <StudyModal
                      deck={deck.deckName}
                      card={props.cards.filter(
                        (card) => card.deck === deck._id
                      )}
                    ></StudyModal>
                  )}
                  <div className="ms-3">
                    <ActionMenu
                      deck={{
                        name: deck.deckName,
                        id: deck._id
                      }}
                    ></ActionMenu>
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

export default connect(mapStateToProps)(DeckList);
