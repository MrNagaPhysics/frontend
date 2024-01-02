import React from 'react'
import YearGroup from './yearGroup'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import data from './index.json';
import { useEffect, useState} from "react";
import QuizMenu from './QuizMenu';

const HomePage = () => {
  //Get all year groups
  const [indexData, setIndexData] = useState(null)
  const [yearGroups, setYearGroups] = useState([])
  const [mainResourceCategories, setMainResourceCategories] = useState([])
  
  useEffect(() => {
    setIndexData(data)
    setYearGroups(data["year_groups"])
    setMainResourceCategories(data["main_resource_categories"])
  }, [])
  
  // we need to iterate over each year group. then create a component called YearGroup. 
  // pass in year_group, playlist set
  // for a single year group, we will pass playlist set. we will need to iterate over each
  // playlist set, creating a new playlist componenet.
  // within the playlist componenet, we will have to pass playlist name and slug as props.
  if (indexData !== null) {
    return (
      <>
        {
          yearGroups.map(
            yearGroup => {
              const yearGroupName = yearGroup['year_group']
              const slug = yearGroup['slug']
              const playlistSet = yearGroup['playlist_set']
              return <YearGroup yearGroupName={yearGroupName} slug={slug} playlistSet={playlistSet}/>
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
