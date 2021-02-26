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
import { Route, Redirect } from 'react-router-dom'
import Restaurants from './Restaurants'

const InstanceList = (props) => {
  const [messsage, setMessage] = useState('')
  const [dinnerPlans, setDinnerPlans] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [instanceDetails, setInstanceDetails] = useState({})
  const [test, setTest] = useState('This is a props test')
  const [instanceId, setInstanceId] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [yelpAPIID, setYelpAPIID] = useState('')
  const [redirectToResult, setRedirectToResult] = useState(false)

  useEffect(() => {
    setCurrentUser(props.currentUser.email)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/plansnew`)
      .then(response => {
        // console.log('💄💄💄💄💄💄💄💄', response)
        let plans = response.data
        // console.log(response.data.userInstances)
        setDinnerPlans(plans)
      })
      .catch(err => {
        setMessage(err)
        console.log(err)
      })
  }, [])

  // ------------------------------------------- e.handlers

  const buttonHandlerView = e => {
    setYelpAPIID(e.currentTarget.getAttribute('results'))
    // console.log("View button clicked")
    console.log(e.currentTarget.getAttribute('results'))
    setRedirectToResult(true);
  }

  const buttonHandlerStart = e => {
    // console.log("Start button clicked")
    e.preventDefault()
    // console.log(e)
    // console.log(e.target)
    // console.log(e.currentTarget)
    let instance = e.currentTarget.value
    setInstanceId(instance)
    let objectId = e.currentTarget.getAttribute('value2')
    setInstanceId(instance)
    // console.log('aaahhhhh', e.currentTarget.getAttribute('value2'))
    // console.log(e.currentTarget.value)
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/start`, { _id: instance, objectId: objectId })
      .then(response => {
        // console.log(`⭐️⭐️⭐️⭐️`, response)
        setInstanceDetails(response.data)
        //TODO axios.patch to update userinstance model to have started be true
        setRedirect(true)
      })
      .catch(err => {
        console.log('error in trying to start the game', err)
        setMessage(err.message);
        // props.handleAuth(null);
      })

  }


  const buttonHandlerFinish = e => {
    // console.log("Finish button clicked")
    e.preventDefault()
    // console.log(e)
    // console.log(e.target)
    // console.log(e.currentTarget)
    let instance = e.currentTarget.value
    setInstanceId(instance)
    let objectId = e.currentTarget.getAttribute('value2')
    setInstanceId(instance)
    // console.log('aaahhhhh', e.currentTarget.getAttribute('value2'))
    // console.log(e.currentTarget.value)
    //TODO adjust this route so it doesn't add restaurants
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/start`, { _id: instance, objectId: objectId })
      .then(response => {
        // console.log(`⭐️⭐️⭐️⭐️`, response)
        setInstanceDetails(response.data)
        //TODO axios.patch to update userinstance model to have started be true
        setRedirect(true)
      })
      .catch(err => {
        console.log('error in trying to start the game', err)
        setMessage(err.message);
        // props.handleAuth(null);
      })
  }


  // ---------------------------------------- mapping JSON

  let creatingList = 'Loading...'
  if (dinnerPlans.length > 0) {
    creatingList =
      dinnerPlans.map((list, i) => {
        // console.log(list)
        let placeText = `${list.name}`;
        if (list.complete) {
          return (
            <ListItem key={list.instance}>
              <ListItemText primary={placeText} />
              <Button variant="contained" color="" value2={list._id} results={list.result.yelpAPI} value={list.instance} onClick={buttonHandlerView}>View Selected Restaurant</Button>
            </ListItem>
          )
        }
        else if (!list.started) {
          return (
            <ListItem key={list.instance}>
              <ListItemText primary={placeText} />
              <Button variant="contained" color="secondary" value2={list._id} value={list.instance} onClick={buttonHandlerStart}>Start Matching</Button>
            </ListItem>
          )
        }
        else if (list.started) {
          if (currentUser === list.creator && !list.creatorFinished || currentUser === list.player && !list.playerFinished) {
            return (
              <ListItem key={list.instance}>
                <ListItemText primary={placeText} />
                <Button variant="contained" color="primary" value2={list._id} value={list.instance} onClick={buttonHandlerFinish}>Finish Matching</Button>
              </ListItem>
            )
          } else {
            return (
              <ListItem key={list.instance}>
                <ListItemText primary={placeText} />
                <Button variant="contained" color="primary" value2={list._id} value={list.instance}>Waiting on your friend</Button>
              </ListItem>
            )
          }
        }
      })
  }

  // material-ui styles
  const useStyles = makeStyles((theme) => ({
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        marginTop: '2em'
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
      margin: "0 auto",
      paddingTop: "10vh",
      paddingLeft: '5vw',
      paddingRight: '5vw',
      height: "100%",
    },
    formtitle: {
      color: "red"
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: "0 auto",
      paddingBottom: "2em"
    },
    title: {
      fontFamily: "Paytone One",
      fontSize: "2em",
      color: "#ED1C24",
      marginBottom: "1em"
    }
  }));



  const classes = useStyles();
  
  if (!props.currentUser) return <Redirect to='/' />
  if (redirect) return <Redirect to={{ pathname: '/restaurants', instanceId: instanceId }} />
  if (redirectToResult) return <Redirect to={{ pathname: '/result', yelpApi: yelpAPIID }} />
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title}>
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

