import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CircleItem from '../../components/CircleItem/CircleItem';

function CircleItemGallery({items}) {
  return (
    <Container className={'mt-2'}>
      <Row>
        {items.map(e => {
          return (
            <Col xs={4} lg={2} className={'p-4'}>
              <CircleItem
                imageSrc={e.imageSrc}
                imageHeading={e.imageHeading}
                imageLink={e.imageLink}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CircleItemGallery;
