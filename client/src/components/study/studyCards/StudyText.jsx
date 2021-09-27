import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function StudyText(props) {
  return (
    <div className="mb-3">
      <Card>
        <CardBody>
          <p style={{ textAlign: 'center' }}>{props.value}</p>
        </CardBody>
      </Card>
    </div>
  );
}
