import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CircleItem from '../../components/CircleItem/CircleItem'

function CircleItemGallery() {
    return (
        <Container className={'mt-2'}>
            <Row>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
                <Col xs={4} lg={2} className={'p-4'}>
                    <CircleItem
                        imageSrc={'https://res.cloudinary.com/drpag0qar/image/upload/v1599693176/guitar-circle_me1kup.png'}
                        imageHeading={'Top-rated guitars'}
                        imageLink={'#'}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default CircleItemGallery;