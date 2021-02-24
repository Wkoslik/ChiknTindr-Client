import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import {
  Grid,
  Paper,
  FormLabel,
  Button,
  TextField,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Invite = (props) => {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [location, setLocation] = useState('');
  const [whereto, setWhereto] = useState({
    Delivery: false,
    Takeout: false,
    DineIn: false,
    OutsideSeating: false
  })
  const [redirect, setRedirect] = useState(false);

  const handleDescription = e => {
    setDescription(e.target.value)
  };

  const handleEmail = e => {
    setEmail(e.target.value)
  };

  const handleCategory = e => {
    setCategoryInput(e.target.value)
  }

  const handleLocation = e => {
    setLocation(e.target.value)
  }

  const handleWhereto = e => {
    setWhereto({ ...whereto, [e.target.name]: e.target.checked })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('button clicked')
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user/invite`,
      { description, email, categoryInput, location, whereto }
    ).then(response => {
      setRedirect(true)
    }).catch(err => console.log(`😖 error in invite handlesubmit`, err));
  };

  const useStyles = makeStyles((theme) => ({
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: "0 auto"
    },
  }));

  const classes = useStyles();

  //TODO Change redirect to list of instances
  if (redirect) return <Redirect to='/plans' />
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <FormLabel>
                Invite Friend
            </FormLabel>
              <div>
                <TextField
                  required
                  id="friend-name" //TODO where else will we need to change this id? 
                  label="Dinner plan description"
                  defaultValue="Dinner Plans Description"
                  variant="outlined"
                  value={description}
                  onChange={handleDescription}
                />
                <TextField
                  required
                  id="outlined-helperText"
                  label="Friend's Email"
                  defaultValue="email"
                  helperText="Send your friend an invite"
                  variant="outlined"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <FormLabel>
                Options
            </FormLabel>
              <div>
                <TextField
                  id="category"
                  label="Category" //TODO can we change this to somethign more descriptive than 'category'?
                  variant="outlined"
                  value={categoryInput}
                  onChange={handleCategory}
                />
                <TextField
                  id="location"
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={handleLocation}
                />
              </div>
              <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Eat Where?</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch checked={whereto.Delivery} onChange={handleWhereto} name="Delivery" />}
                      label="Delivery"
                    />
                    <FormControlLabel
                      control={<Switch checked={whereto.Takeout} onChange={handleWhereto} name="Takeout" />}
                      label="Take Out"
                    />
                    <FormControlLabel
                      control={<Switch checked={whereto.DineIn} onChange={handleWhereto} name="DineIn" />}
                      label="Dine In"
                    />
                    <FormControlLabel
                      control={<Switch checked={whereto.OutsideSeating} onChange={handleWhereto} name="OutsideSeating" />}
                      label="Outside Seating"
                    />
                  </FormGroup>
                  {/* <FormHelperText>Optional text goes here</FormHelperText> */}
                </FormControl>
              </div>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Invite</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Invite;