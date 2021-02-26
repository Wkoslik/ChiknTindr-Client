import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FriendsList from './FriendsList'

import {
  Grid,
  Paper,
  FormLabel,
  Button,
  TextField,
  FormGroup,
  FormControl,
  FormControlLabel,
  Switch,
  ThemeProvider,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/theme';
import { letterSpacing } from '@material-ui/system';


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
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: "auto",
      paddingTop: "10vh",
      paddingLeft: '5vw',
      paddingRight: '5vw',
      height: "100%",
    },
    title: {
      fontFamily: "Paytone One",
      fontSize: "2em",
      color: "#ED1C24",
      marginBottom: "1em",
      letterSpacing: 1.5
    },
    formTitle: {
      paddingTop: '1.5em',
      marginBottom: '1em'
    },
    startInvite: {
      marginTop: '1.5em',
      marginBottom: '2em'
    }
  }));

  const classes = useStyles();

  //TODO Change redirect to list of instances
  if (redirect) return <Redirect to='/plans' />
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} variant="h5">
                <strong>Invitations</strong>
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <FormLabel className={classes.formTitle}>
                  <strong>Invite Friend</strong>
                </FormLabel>
                <div>
                  <TextField
                    required
                    id="friend-name"
                    label="Dine plan description"
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
                <FormLabel className={classes.formTitle}>
                  <strong>Options</strong>
                </FormLabel>
                <div>
                  <TextField
                    id="category"
                    label="Dine plan detailed option"
                    variant="outlined"
                    value={categoryInput}
                    onChange={handleCategory}
                  />
                  <TextField
                    id="location"
                    label="Dine plan location"
                    variant="outlined"
                    value={location}
                    onChange={handleLocation}
                  />
                </div>
                <div>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.formTitle}><strong>Eat Where?</strong></FormLabel>
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
                  </FormControl>
                </div>
                <Button className={classes.startInvite} variant="contained" color="secondary" onClick={handleSubmit}>Invite</Button>
              </form>
            </Paper>
            <FriendsList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default Invite;