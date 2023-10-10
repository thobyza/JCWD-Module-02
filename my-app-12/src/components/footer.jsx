import React, { Component } from 'react'
import { Box } from "@mui/material";

export default class Footer extends Component {
  render() {
    return (
      <Box sx={{
            display :'flex',
            width: '100vw',
            height: '100px',
            bgcolor:'teal',
            justifyContent: 'left',
            alignItems: 'center',
            fontSize:'40px'
      }}>
            Ini Footer
      </Box>
    )
  }
}