import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
        <Container maxWidth="sm">
          <NavBar />
          <Box textAlign="center" mt={5}>
            <Router>
              <Routes>
                {/* uncomment in developenv */}
              {/* <Route exact path="quiz/:id" element = {<Quiz />} /> */}

              {/* uncomment in local env */}
              <Route exact path="quiz" element = {<Quiz />} />
              </Routes>

              <Routes>
              <Route exact path="/" element = {<Home  />} />
              </Routes>

            </Router>
          </Box>
        </Container>
  );
}

export default App;
