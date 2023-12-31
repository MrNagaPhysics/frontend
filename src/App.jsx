import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import YearGroups from './components/YearGroups';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlaylistCatogory from './components/PlaylistCatogory';

function App() {
  return (
    <>
        <NavBar />
        
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Router>
              <Routes>
                {/* uncomment in developenv */}
              {/* <Route exact path="quiz/:id" element = {<Quiz />} /> */}

              {/* uncomment in local env */}
              <Route exact path="quiz" element = {<Quiz />} />
              </Routes>

              <Routes>
              <Route exact path="/" element = {<YearGroups/>} />
              </Routes>

            </Router>
          </Box>
        </Container>
    </>
  );
}

export default App;
