import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Quiz from "./components/Quiz"
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topic from './components/Topic'
import Login from './components/Login'
import AccountMenu from './components/AccountMenu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <>
       <Router>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
        <NavBar />
        
        <Container maxWidth="md">
          <Box textAlign="center" mt={4}>
         
              <Routes>
                {/* uncomment in developenv */}
              {/* <Route exact path="quiz/:id" element = {<Quiz />} /> */}

              {/* uncomment in local env */}
              <Route exact path="quiz" element = {<Quiz />} />


              <Route exact path="/" element = {<HomePage />} />

              <Route exact path="/topic" element = {<Topic />} />
           
              <Route exact path="/AccountMenu" element = {<AccountMenu />} />
              <Route exact path="/login" element = {<Login />} />
              </Routes>

        
          </Box>
        </Container>
        </ThemeProvider>
        </Router>
    </>
  );
}

export default App;
