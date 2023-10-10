import { Box, Button, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class DetailPage extends Component {
  render() {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px',
        gap: 2
      }}>
        <Typography>
            Detail Page
        </Typography>
        <TextField label="username" type="text" />
        <Button variant='outlined'>Submit</Button>
      </Box>
    )
  }
}