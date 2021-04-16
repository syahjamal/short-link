import React from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';
import Loading from '../components/Loading';

import "./Home.css";

function Home(props) {
    return (
        <>
        <Loading/>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card">
                            <div className="text-center">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                                    width="140"
                                    alt="logo"
                                />
                                <br />
                                <small>
                                    QR Code and URL Shortener Generator
                                </small>
                            </div>
                            <form className="mt-2">
                                <div className="form-group mt-3" >
                                    <input type="text" className="form-control search__input" />
                                </div>
                                <div className="form-group" style={{ padding: '24px 48px 24px 48px' }}>
                                    <button type="button" className="btn btn-primary w-100">Generate</button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card md-3">
                            <div className="text-center mt-3">
                                <small>
                                    Result
                                </small>
                                <br/>
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                                    width="140"
                                    alt="logo"
                                />
                            </div>
                            <ul className="list-group mt-3" style={{fontSize:"small", padding: '0px 24px 24px 24px'}}>
                                <li className="list-group-item">
                                    Short URL: <a href="/">XXX</a>
                                </li>
                                <li className="list-group-item">
                                    Alternative URL : <a href="/">XXX</a>
                                </li>
                                <li className="list-group-item">
                                    Original URL : <a href="/">XXX</a>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
;
export default Home;