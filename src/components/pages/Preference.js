import { useEffect, useState } from 'react';
import { 
  Grid, 
  Paper, 
  Radio, 
  RadioGroup, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Button,
  ThemeProvider,
  Typography
} from '@material-ui/core';
import theme from '../../theme/theme';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Redirect } from 'react-router-dom'

const Preference = (props) => {
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [dietary, setDietary] = useState('');
  const [messsage, setMessage] = useState('')
  const [redirect, setRedirect] = useState(false);

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
            setRedirect(true)
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
      maxWidth: 600,
      margin: "auto",
      paddingTop: "10vh",
      height: "100%",
      paddingLeft: '5vw',
      paddingRight: '5vw',
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    formTitle: {
      paddingTop: '1.5em',
      marginBottom: '1em'
    },
    title: {
      fontFamily: "Paytone One",
      fontSize: "2em",
      color: "#ED1C24",
    },
    startSearch: {
      marginTop: '1.5em',
      marginBottom: '2em'
    }
  }));

  const classes = useStyles();

if (redirect) return <Redirect to='/invite' /> 
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} variant="h5">
                Search Options
              </Typography>
              <FormControl component="fieldset" >
                <FormLabel className={classes.formTitle}>
                  <strong>Rating</strong>
                </FormLabel>
                <Rating name="rating" defaultValue={2.5} precision={0.5} value={rating} onChange={handleRating} />
                <FormLabel className={classes.formTitle}>
                  <strong>Price</strong>
                </FormLabel>
                <Rating name="price-rating" defaultValue={2.5} value={price} onChange={handlePrice} max={4} icon={<AttachMoneyIcon />} />
                <FormLabel className={classes.formTitle}>
                  <strong>Dietary Option</strong>
                </FormLabel>
                <RadioGroup aria-label="dietary" name="dietary" value={dietary} onChange={handleDietary}>
                  <FormControlLabel size="small" value="vegan" control={<Radio />} label="Vegan" />
                  <FormControlLabel size="small" value="vegetarian" control={<Radio />} label="Vegetarian" />
                  <FormControlLabel size="small" value="kosher" control={<Radio />} label="Kosher" />
                  <FormControlLabel size="small" value="halal" control={<Radio />} label="Halal" />
                  <FormControlLabel size="small" value="" control={<Radio />} label="none" />
                </RadioGroup>
                <Button className={classes.startSearch} variant="contained" color="secondary" onClick={handleFormInput}>Save</Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default Preference;