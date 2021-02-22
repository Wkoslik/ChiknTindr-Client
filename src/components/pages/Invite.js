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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // TODO: add from password verification
  const [redirect, setRedirect] = useState(false);

  const [categoryInput, setCategoryInput] = useState('');
  const [location, setLocation] = useState('');
  const [whereto, setWhereto] = useState({
    Delivery: false,
    Takeout: false,
    DineIn: false,
    OutsideSeating: false
  })

  const handleName = e => {
    setName(e.target.value)
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
      // TODO Commented out until we get the connection with the DB
      axios.post(
          // `${process.env.REACT_APP_SERVER_URL}/api/signup`,
          // { name, email }
          console.log('POST REQ')
      ).then(response => {
          console.log(response.data)
          setRedirect(true);
      }).catch(err => console.log(`😖 error`, err));
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
    },
  }));

  const classes = useStyles();

  if (redirect) return <Redirect to='/restaurants' />
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
                  id="friend-name"
                  label="Friend's Name"
                  defaultValue="Name"
                  variant="outlined"
                  value={name}
                  onChange={handleName}
                /> 
                <TextField
                  required
                  id="outlined-helperText"
                  label="Friend's Email"
                  defaultValue="email"
                  helperText="sending invitation to your friend"
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
                  label="Category"
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
                  <FormHelperText>Optional text goes here</FormHelperText>
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