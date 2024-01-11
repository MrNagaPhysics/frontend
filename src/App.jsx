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
import Playlist from './components/Playlist.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Context from './components/Context.jsx';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  const baseUrl = "http://localhost:8000/main/apps/api/v1/"
  const [yearGroups, setYearGroups] = useState(null) // Used to capture data associated with each year group (playlist, playlist categories, videos and worksheets)
  const [mainResourceCategories, setMainResourceCategories] = useState(null) // Used to capture file data - main categories, sub categories and pdf files.
  
  useEffect(() => {
    axios
      .get(baseUrl)
      .then(
        response => {
          setYearGroups(response.data['year_groups'])
          setMainResourceCategories(response.data['main_resource_categories'])
        }
      )
  }, [])




  return (
    <>
    <Context.Provider value={yearGroups}>
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
           
              <Route exact path="/AccountMenu" element = {<AccountMenu />} />
              <Route exact path="/login" element = {<Login />} />

              <Route path ='/:playlist' element={<Playlist />}/>

              <Route exact path="/:yeargroupparam/:playlistparam/:playlistcategoryparam" element = {<Topic />} />

              </Routes>

        
          </Box>
        </Container>
        </ThemeProvider>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
