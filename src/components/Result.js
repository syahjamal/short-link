import React from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';

function Result(result) {
    return (
        <>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card md-3">
                            <div className="text-center mt-3">
                                <small>
                                    Result
                                </small>
                                <br />
                                <img
                                    src={`https://qrtag.net/api/qr_transparent_6.svg?url=${result.original_link}`}
                                    width="140"
                                    alt="logo"
                                />
                            </div>
                            <ul className="list-group mt-3" style={{ fontSize: "small", padding: '0px 24px 24px 24px' }}>
                                <li className="list-group-item">
                                    Short URL: <a href={result.short_link}>{result.short_link}</a>
                                </li>
                                <li className="list-group-item">
                                    Alternative URL : <a href={result.short_link2}>{result.short_link2}</a>
                                </li>
                                <li className="list-group-item">
                                    Original URL : <a href={result.original_link}>{result.original_link}</a>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Result
