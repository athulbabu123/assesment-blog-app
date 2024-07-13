import { TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <>
    <div className='textBox'>
      
      <Typography variant='h3' className='tableHeading'>Create your Blog Here</Typography><br/>
      <div className='tables'> <TextField variant='outlined' label='Blog name'/><br /><br />
      <TextField variant='outlined' label='Description'/><br /><br />
      <TextField variant='outlined' label='Author Name'/><br /><br /></div>
    </div>
    </>
    
  )
}

export default Add
