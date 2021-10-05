import React, { useEffect } from 'react';
import {
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardActions';
import BlankCard from './BlankCard';
import Plus from 'bootstrap-icons/icons/plus-circle.svg';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import CodeBlockInput from './inputs/CodeBlockInput';
import TextInput from './inputs/TextInput';
import ModalCloseBtn from '../ModalCloseBtn';

function AddCardModal(props) {
  const handleSubmit = (values) => {
    props.addCard(values);
    props.toggle();
  };

  return (
    <div>
      {/* <NavLink color="dark" onClick={props.toggle}>
        Add Card
      </NavLink> */}
      <div className="d-flex">
        <img src={Plus} alt="" srcset="" className="me-2 actionIcon" />
        <span style={{ verticalAlign: 'baseline' }}>Add a Card</span>
      </div>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        style={{ width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader
          toggle={props.toggle}
          close={<ModalCloseBtn onClick={props.toggle} />}
        >
          <h4 className="text-pink">Add a new card</h4>
        </ModalHeader>
        <ModalBody className="pt-1">
          <Form
            onSubmit={handleSubmit}
            mutators={{ ...arrayMutators }}
            initialValues={{
              language: 'javascript',
              front: [],
              back: [],
              deck: props.deck.id
            }}
            render={({
              handleSubmit,
              form: {
                mutators: { push }
              }, // injected from final-form-arrays above
              pristine,
              form,
              submitting,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column mb-3 w-25">
                  <Label htmlFor="deck">Deck:</Label>
                  <Field
                    name="deck"
                    type="select"
                    render={(propers) => (
                      <>
                        <Input
                          type="select"
                          {...propers.input}
                          id="deck"
                          className="form-select"
                        >
                          {props.decks.map((deck) => (
                            <option value={deck._id}>{deck.deckName}</option>
                          ))}
                        </Input>
                      </>
                    )}
                  />
                </div>
                <div className={'d-flex justify-content-between flex-row '}>
                  <BlankCard
                    title="Front"
                    addCode={() => {
                      if (values.front.length < 3) {
                        form.mutators.push('front', {
                          type: 'code',
                          code: '//write me'
                        });
                      }
                    }}
                    addText={() => {
                      if (values.front.length < 3) {
                        push('front', { type: 'text' });
                      }
                    }}
                  >
                    <FieldArray name="front">
                      {({ fields }) =>
                        fields.map((name, index) => (
                          <div key={name}>
                            <Field
                              name={`${name}${values.front[index].type}`}
                              render={(props) => {
                                return (
                                  <>
                                    {values.front[index].type === 'code' ? (
                                      <CodeBlockInput
                                        {...props}
                                        remove={() => fields.remove(index)}
                                      />
                                    ) : (
                                      <TextInput
                                        {...props}
                                        remove={() => fields.remove(index)}
                                      />
                                    )}
                                  </>
                                );
                              }}
                            ></Field>
                          </div>
                        ))
                      }
                    </FieldArray>
                  </BlankCard>
                  <BlankCard
                    title="Back"
                    addCode={() => {
                      if (values.back.length < 3) {
                        form.mutators.push('back', {
                          type: 'code',
                          code: '//write me'
                        });
                      }
                    }}
                    addText={() => {
                      if (values.back.length < 3) {
                        push('back', { type: 'text' });
                      }
                    }}
                  >
                    <FieldArray name="back">
                      {({ fields }) =>
                        fields.map((name, index) => (
                          <div key={name}>
                            <Field
                              name={`${name}${values.back[index].type}`}
                              render={(props) => {
                                return (
                                  <>
                                    {values.back[index].type === 'code' ? (
                                      <CodeBlockInput
                                        {...props}
                                        remove={() => fields.remove(index)}
                                      />
                                    ) : (
                                      <TextInput
                                        {...props}
                                        remove={() => fields.remove(index)}
                                      />
                                    )}
                                  </>
                                );
                              }}
                            ></Field>
                          </div>
                        ))
                      }
                    </FieldArray>
                  </BlankCard>
                </div>
                <Button type="submit" color="success">
                  Add Card
                </Button>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
            )}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  decks: state.auth.user.decks
});

export default connect(mapStateToProps, { addCard })(AddCardModal);
