import { Box } from '@mui/material'
import React, { Component } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

export default class NavbarPage extends Component {
  render() {
    return (
      <Box>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </Box>
    )
  }
}