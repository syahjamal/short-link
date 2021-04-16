import React from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';

import "./Home.css";

function Home(props) {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-5 offset-3">
                        <Card>
                            <div className="text-center">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                                    width="140"
                                    alt="logo" 
                                />
                            </div>
                            <fom>
                                <div className="form-group">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="btn btn-primary btn-lg w-100">Generate</button>
                                </div>
                            </fom>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
;
export default Home;