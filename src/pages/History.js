import React from 'react'
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';

function History(props) {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-10 offset-md-1">
                        <h1>Histories</h1>
                        <Card className="card">    
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Original URL</th>
                                        <th>Short URL</th>
                                        <th>Alternative URL</th>
                                        <th>QR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>XXX</td>
                                        <td>XXX</td>
                                        <td>XXX</td>
                                        <td>XXX</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
;
export default History;