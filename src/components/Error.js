import React from 'react'
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';

function Error(props) {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="col-12 col-md-12">
                        <div className="text-center">
                            <h4>Ooops! Something went wrong</h4>
                            <p>{props.data.error}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Error
