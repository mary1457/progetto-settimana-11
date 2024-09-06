import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import './App.css';
import MyNav from './components/MyNav';
import MainPage from './components/MainPage';
import { Container, Row } from 'react-bootstrap';
import PlayerControls from './components/PlayerControls';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Result from './components/Result';
import Favourite from './components/Favourite';

function App() {
  return (
    <BrowserRouter>
    
   <Container fluid>
  
    <Row>
      <MyNav></MyNav>

    <Routes>
    <Route  path="/" element={  <MainPage></MainPage>}></Route>
    <Route  path="/favourites" element={  <Favourite></Favourite>}></Route>
    <Route path="/search/:query" element={<Result></Result>} />
      </Routes>
      </Row>
      
      </Container>
    
      <PlayerControls></PlayerControls>
    </BrowserRouter>

  );
}

export default App;
