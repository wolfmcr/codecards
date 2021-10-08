import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardActions';
import BlankCard from './BlankCard';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import CodeBlockInput from './inputs/CodeBlockInput';
import TextInput from './inputs/TextInput';

function AddCardForm(props) {
  const handleSubmit = (values) => {
    props.submitFunc(values);
    props.toggle();
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        mutators={{ ...arrayMutators }}
        initialValues={props.initialValues}
        render={({
          handleSubmit,
          form: {
            mutators: { push }
          }, // injected from final-form-arrays above

          form,

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
              {props.btnText}
            </Button>
          </form>
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  decks: state.auth.user.decks
});

export default connect(mapStateToProps, { addCard })(AddCardForm);
