import './App.css';
import NavBar from './components/NavBar';
import YearGroups from './components/YearGroups';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topic from './components/Topic'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
        <NavBar />
        
        <Container maxWidth="md">
          <Box textAlign="center" mt={4}>
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

              <Routes>
              <Route exact path="/topic" element = {<Topic />} />
              </Routes>

            </Router>
          </Box>
        </Container>
        </ThemeProvider>
    </>
  );
}

export default App;
