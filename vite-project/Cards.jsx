import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MyCard({image, name, desc, onEdit, onDelete}){
    
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{width:'300px'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {image}
            </Typography>
            <Typography variant="h5" component="div">
            {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {desc}
            </Typography>
            <Typography variant="body2">
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={onEdit} size="small">Edit</Button>
            <Button onClick={onDelete}  size="small">Delete</Button>
          </CardActions>
        </Card>
      );
}
export default MyCard