import React from 'react'
import PlaylistCatogory from './PlaylistCatogory'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';

export default function YearGroups() {
  return (
    <Paper elevation={2}>
    <Typography variant='h5' pt={2} pl={2} textAlign='left'> Year 12:</Typography>
        <PlaylistCatogory />
    </Paper>
  )
}
