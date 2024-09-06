import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import shuffle from "../assets/playerbuttons/shuffle.png"; 
import previous from "../assets/playerbuttons/prev.png"; 
import play from "../assets/playerbuttons/play.png"; 
import next from "../assets/playerbuttons/next.png"; 
import repeat from "../assets/playerbuttons/repeat.png"; 
import { useDispatch, useSelector } from 'react-redux';
const PlayerControls = () => {
    const playlist = useSelector((state) => state.player);
  return (
    <div className="bg-container fixed-bottom pt-1">
      <Container fluid>
        <Row className="h-100">
          <Col lg={{ span: 10, offset: 2 }}>
            <Row className="h-100 flex-column justify-content-center align-items-center">
                <Col className='text-white text-center'>
                <p className='mb-1'>{playlist.title}</p>
                </Col>
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex justify-content-between">
                  <a href="#">
                    <img src={shuffle} alt="Shuffle" />
                  </a>
                  <a href="#">
                    <img src={previous} alt="Previous" />
                  </a>
                  <a href="#">
                    <img src={play} alt="Play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="Next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="Repeat" />
                  </a>
                </div>

                {/* Barra di progresso */}
                <ProgressBar now={0} className="mt-3" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayerControls;
