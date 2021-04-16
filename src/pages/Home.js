import React, { useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import Col from '../components/Col';
import Card from '../components/Card';
import Row from '../components/Row';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Result from '../components/Result';

import "./Home.css";


function Home(props) {
    const [link, setLink] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [result, setResult] = useState();
    const [error, setError] = useState();

    const submit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        console.log(response.data);
        setResult(response.data.result);
    }

    return (
        <>
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
                            <form className="mt-2" onSubmit={submit}>
                                <div className="form-group mt-3" >
                                    <input
                                        type="text"
                                        className="form-control search__input"
                                        value={link}
                                        onChange={
                                            (e) => setLink(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group" style={{ padding: '24px 48px 24px 48px' }}>
                                    <button type="submit" className="btn btn-primary w-100">Generate</button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {
                result &&
                <Result result={result}/>
            }
            {
                isLoading && !result &&
                <Loading />
            }
            {
                error && <Error />
            }
        </>
    )
}
;
export default Home;