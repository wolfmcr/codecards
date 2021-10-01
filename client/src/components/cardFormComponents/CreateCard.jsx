import {
  Card,
  CardTitle,
  CardBody,
  Button,
  CardFooter,
  CardHeader
} from 'reactstrap';

import React from 'react';

export default function CreateCard(props) {
  return (
    <Card
      style={{ minHeight: '66vh', width: '45%' }}
      className={'mb-3' + (props.mobile ? '' : '')}
    >
      <CardHeader>
        <CardTitle className="p-3">
          <h5>{props.title}</h5>
        </CardTitle>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
      <CardFooter className="">
        <Button
          className="me-1 mb-3"
          onClick={props.addText}
          color="dark"
          style={{ fontFamily: 'Times' }}
        >
          T
        </Button>
        <Button
          className="me-1 mb-3"
          onClick={props.addCode}
          color="dark"
          style={{ fontFamily: 'Arial' }}
        >
          {'</>'}
        </Button>
      </CardFooter>
    </Card>
  );
}
