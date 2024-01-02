import React from 'react'
import PlaylistCatogory from './PlaylistCatogory'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Home from './Home'

export default function YearGroups() {
  return (
    <>
    <Paper elevation={2} pb={5}>
    <Typography variant='h5' py={2} px={2}textAlign='left'> Year 12:</Typography>
        <PlaylistCatogory />
    </Paper>

    <Home />
    </>
  )
}
