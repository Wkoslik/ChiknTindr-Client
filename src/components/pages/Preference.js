import { useEffect, useState } from 'react';
import { 
  Grid, 
  Paper, 
  Radio, 
  RadioGroup, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Button
} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Preference = (props) => {
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [dietary, setDietary] = useState('');
  const [messsage, setMessage] = useState('')

  const handleDietary = event => {
    // console.log(event.target.value)
    setDietary(event.target.value)
    console.log(dietary)
  }
  
  const handleRating = event => {
    setRating(event.target.value.toString())
    // console.log(event.target.value)
  }

  const handlePrice = event => {
    // console.log(event.target.value)
    setPrice(event.target.value.toString())
    console.log(price)
  }

  const handleFormInput = (e) => {
    e.preventDefault();
    console.log('handleforminput')
      axios.put(`${process.env.REACT_APP_SERVER_URL}/user/preferences`, { price, dietary })
          .then(response => {
        console.log(response.data.message)
        
          })
          .catch(err => {
          console.log('error  in useEffect', err)
          setMessage(err.message);
          // props.handleAuth(null);
          })
  
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FormControl component="fieldset" >
              <FormLabel>
                Rating
              </FormLabel>
              <Rating name="rating" defaultValue={2.5} precision={0.5} value={rating} onChange={handleRating} />
              <FormLabel>
                Price
              </FormLabel>
              <Rating name="price-rating" defaultValue={2.5} value={price} onChange={handlePrice} max={4} icon={<AttachMoneyIcon />} />
              <FormLabel>
                Dietary Option
              </FormLabel>
              <RadioGroup aria-label="dietary" name="dietary" value={dietary} onChange={handleDietary}>
                <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                <FormControlLabel value="kosher" control={<Radio />} label="Kosher" />
                <FormControlLabel value="halal" control={<Radio />} label="Halal" />
                <FormControlLabel value="" control={<Radio />} label="none" />
              </RadioGroup>
              <Button variant="contained" color="primary" onClick={handleFormInput}>Save</Button>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Preference;