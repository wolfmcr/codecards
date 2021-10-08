import React, { useEffect } from 'react';
import StudyModal from '../study/StudyModal';
import NewDeckModal from '../addDeckComponents/NewDeckModal';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ActionMenu from './actionMenu/ActionMenu';
import { toggleStudyModal } from '../../actions/studyActions';

function DeckList(props) {
  useEffect(() => {}, [props.decks, props.cards]);

  return (
    <div>
      {props.decks[0] ? (
        <>
          <h3>Decks</h3>
          <ListGroup>
            {props.decks.map((deck) => (
              <ListGroupItem
                className="d-flex justify-content-center"
                key={deck._id}
              >
                <div style={{ width: '75%' }}>
                  <h6>{deck.deckName}</h6>
                </div>

                <div
                  style={{ width: '25%' }}
                  className="d-flex justify-content-end"
                >
                  <span>
                    Cards: {/* consolidate callbacks */}
                    {
                      props.cards.filter((card) => card.deck === deck._id)
                        .length
                    }
                  </span>
                  {props.cards.filter((card) => card.deck === deck._id).length >
                    0 && (
                    <a
                      href="#"
                      className="link-primary user-select-none text-decoration-none ms-3"
                      style={{
                        userSelect: 'none',
                        cursor: 'pointer'
                      }}
                      onClick={() => props.toggleStudyModal(deck)}
                    >
                      Study
                    </a>
                  )}
                  <div className="ms-3">
                    <ActionMenu deck={deck}></ActionMenu>
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
      <StudyModal />
    </div>
  );
}

const mapStateToProps = (state) => ({
  decks: state.auth.user.decks,
  cards: state.auth.user.cards
});

export default connect(mapStateToProps, { toggleStudyModal })(DeckList);
