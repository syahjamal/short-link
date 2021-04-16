import React from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';

import './Loading.css';

function Loading(props) {
    return (
        <>
             <Container className="mt-5 mb-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card md-3">
                            <div className="text-center mt-3">
                               <div className="title_result loading">

                               </div>
                               <div className="qr_result loading mt-2">

                               </div>

                            </div>
                            <ul className="list-group mt-3" style={{fontSize:"small", padding: '0px 24px 24px 24px'}}>
                                <li className="list-group-item-load loading">
                                    
                                </li>
                                <li className="list-group-item-load loading">
                                    
                                </li>
                                <li className="list-group-item-load loading">
                                    
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Loading
