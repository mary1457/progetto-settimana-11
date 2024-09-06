import React from "react";
import { Row, Col } from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicsAction } from "../redux/actions";
import { useParams } from 'react-router-dom';

const MainPage = () => {
    const {query} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (query) {
            dispatch(getMusicsAction(query,"search"));
        }
      }, [query, dispatch]);
    


    const resultSongs = useSelector((state) => state.search);
   
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
                        <h2>Results</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                            {resultSongs.map((song) => (
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
