// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import {
  ThemeProvider,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography
} from '@material-ui/core';

import theme from '../../theme/theme';
import axios from 'axios';
import { useState, useEffect } from 'react'

const InstanceList = (props) => {
  const [messsage, setMessage] = useState('')
  const [dinnerPlans, setDinnerPlans] = useState([])

  const instanceJSON = [
    {
      "name": "Sean",
      "restaurant_is_chosen": true,
      "match_is_started": true,
      "match_complete": true
    },
    {
      "name": "david",
      "restaurant_is_chosen": false,
      "match_is_started": false,
      "match_complete": false
    },
    {
      "name": "Whitney",
      "restaurant_is_chosen": false,
      "match_is_started": true,
      "match_complete": false
    },
    {
      "name": "Young",
      "restaurant_is_chosen": false,
      "match_is_started": true,
      "match_complete": false
    },
  ]

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/plans`)
      .then(response => {
        setMessage(response.message)
        console.log(messsage)
      })
      .catch(err => {
        setMessage(err)
        console.log(messsage)
      })
  }, [])


  // ------------------------------------------- e.handlers

  const buttonHandlerView = e => {
    console.log("View button clicked")
    // creatingList();
  }

  const buttonHandlerStart = e => {
    console.log("Start button clicked")
    e.preventDefault()
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/test/nouser2`)
      .then(response => {
        console.log(`⭐️⭐️⭐️⭐️`)
      })
      .catch(err => {
        console.log('error  in useEffect', err)
        setMessage(err.message);
        // props.handleAuth(null);
      })

  }

  const buttonHandlerFinish = e => {
    console.log("Finish button clicked")
    // creatingList();
  }

  // ---------------------------------------- mapping JSON

  let creatingList =
    instanceJSON.map((list, i) => {
      let placeText = `Dinner with ${list.name}`;
      if (list.match_is_started && list.match_complete) {
        return (
          <ListItem key={i}>
            <ListItemText primary={placeText} />
            <Button variant="contained" color="" onClick={buttonHandlerView}>View Restaurant</Button>
          </ListItem>
        )
      }
      else if (!list.match_is_started) {
        return (
          <ListItem key={i}>
            <ListItemText primary={placeText} />
            <Button variant="contained" color="secondary" onClick={buttonHandlerStart}>Start Matching</Button>
          </ListItem>
        )
      }
      else if (list.match_is_started && !list.match_complete) {
        return (
          <ListItem key={i}>
            <ListItemText primary={placeText} />
            <Button variant="contained" color="primary" onClick={buttonHandlerFinish}>Finish Matching</Button>
          </ListItem>
        )
      }
    })

  // material-ui styles
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
    formtitle: {
      color: "red"
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: "0 auto"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography>
                Dinner Plans
              </Typography>
              <List className={classes.list}>
                {creatingList}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default InstanceList;

