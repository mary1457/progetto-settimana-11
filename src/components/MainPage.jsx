import React from "react";
import { Row, Col,Button } from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicsAction } from "../redux/actions";
import { addToPlayer } from '../redux/actions';
const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMusicsAction("queen", "rock"));
        dispatch(getMusicsAction("katyperry", "pop"));
        dispatch(getMusicsAction("eminem", "hiphop"));
    }, [dispatch]);


    const rockSongs = useSelector((state) => state.rock);
    const popSongs = useSelector((state) => state.pop);
    const hiphopSongs = useSelector((state) => state.hiphop);
    return (
        <main className="mainPage col-12 col-md-9 offset-md-3" >

            {/* Links Section */}
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </Col>
            </Row>

            {/* Rock Classics Section */}
            <Row>

                <Col xs={10}>
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                            {rockSongs.map((song) => (
                                <Col className="text-center" key={song.id}>
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p>
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                    <Button onClick={() => dispatch(addToPlayer(song))}>Play</Button>
                                </Col>
                            ))}


                        </Row>
                    </div>
                </Col>
            </Row>

            {/* Pop Culture Section */}
            <Row>
                <Col xs={10}>
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                            {popSongs.map((song) => (
                                <Col className="text-center" key={song.id}>
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p>
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            {/* HipHop Section */}
            <Row>
                <Col xs={10}>
                    <div id="hiphop">
                        <h2>HipHop</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                            {hiphopSongs.map((song) => (
                                <Col className="text-center" key={song.id}>
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p>
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

        </main>
    );
};

export default MainPage;
