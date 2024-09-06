import React from "react";
import { Row, Col,Button } from "react-bootstrap";

import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavouriteAction, addToFavouriteAction, addToPlayer} from "../redux/actions";


const Favourite = () => {
   
    const favourite = useSelector((state) => state.favourite.list);
    const dispatch = useDispatch();
   
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
                        <h2>Favourites</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 g-2" id="rockSection">
                            {favourite.map((song) => (
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
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button
                                            onClick={() => dispatch(addToPlayer(song))}
                                            className="w-50 mx-2"
                                            variant="success"
                                        >
                                            Play
                                        </Button>
                                        {favourite.includes(song) ? (
                                            <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem", color: "red" }} onClick={() => dispatch(removeFromFavouriteAction(song))}></i>
                                        ) : (
                                            <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem", color: "white" }} onClick={() => dispatch(addToFavouriteAction(song))}></i>  
                                        )}
                                      

                                    </div>
                                </Col>
                            ))}


                        </Row>
                    </div>
                </Col>
            </Row>

        </main>
    );
};

export default Favourite;
