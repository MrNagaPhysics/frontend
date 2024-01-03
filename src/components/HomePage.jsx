import React from 'react'
import YearGroup from './yearGroup'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useEffect, useState} from "react";
import QuizMenu from './QuizMenu';
import axios from 'axios';

const HomePage = () => {
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
  
  // we need to iterate over each year group. then create a component called YearGroup. 
  // pass in year_group, playlist set
  // for a single year group, we will pass playlist set. we will need to iterate over each
  // playlist set, creating a new playlist componenet.
  // within the playlist componenet, we will have to pass playlist name and slug as props.
  if (yearGroups !== null && mainResourceCategories !== null) {
    return (
      <>
        {
          yearGroups.map(
            yearGroup => {
              const yearGroupName = yearGroup['year_group']
              const id = yearGroup['id']
              const playlists = yearGroup['playlists']
              return <YearGroup key={id} yearGroupName={yearGroupName} playlists={playlists}/>
            }
          )
        }

        <QuizMenu />
      </>
    )
  } 
  else {
    return null
  }

}



export default HomePage
