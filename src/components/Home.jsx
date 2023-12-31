import { Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import { Box} from "@mui/material"
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import QuizIcon from '@mui/icons-material/Quiz';
import { blue } from '@mui/material/colors';

const Home = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quiz")
      
        }

    return (
        <Box mt={5}>
            <Paper elevation={2} pb={5}>
            <Typography variant='h5' pt={2} pl={2}textAlign='left'> Quiz App:</Typography>
            
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <QuizIcon fontSize='large'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText onClick={handleClick} primary="List of available quizzes"/>
      </ListItem>
      </List>

            </Paper>
        </Box>
      
    )
}

export default Home;