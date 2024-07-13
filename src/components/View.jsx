import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const View = () => {

    var[input,setInput]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setInput(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
   


<div className='heading'>
<Typography variant='h3'>Welcome to Your Blogs Website</Typography><br /><br />
</div>

      <Grid container spacing={2}>
      {input.map((val,i)=>{
                    return(
                        <Grid item xs={12} md={4} >
                        
                        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image_url}
        title={val.id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
                    )
                })}

            

      </Grid>
    </div>
  )
}

export default View
