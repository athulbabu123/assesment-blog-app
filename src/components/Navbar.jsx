import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box  sx={{ flexGrow: 1 }}>
        <AppBar color='primary' position="static">
          <Toolbar >
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography id='titleText' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography> &nbsp;

            <Button>
			<Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home</Link>
		  </Button>

      <Button>
			<Link to={'/add'} style={{textDecoration:'none', color:'white'}}>add</Link>
		  </Button>
            
            

          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </div>
  )
}

export default Navbar
