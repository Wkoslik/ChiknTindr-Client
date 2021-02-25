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


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/plans`)
      .then(response => {
        let plans = response.data.userInstances
        console.log(response.data.userInstances)
        setDinnerPlans(plans)
      })
      .catch(err => {
        setMessage(err)
        console.log(err)
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
    // console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
    let instance = e.currentTarget.value
    setInstanceId(instance)
    let objectId = e.currentTarget.getAttribute('value2')
    setInstanceId(instance)
    console.log('aaahhhhh', e.currentTarget.getAttribute('value2'))
    console.log(e.currentTarget.value)
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/start`, { _id: instance, objectId: objectId })
      .then(response => {
        console.log(`⭐️⭐️⭐️⭐️`, response)
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
    console.log("Finish button clicked")
    e.preventDefault()
    // console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
    let instance = e.currentTarget.value
    setInstanceId(instance)
    let objectId = e.currentTarget.getAttribute('value2')
    setInstanceId(instance)
    console.log('aaahhhhh', e.currentTarget.getAttribute('value2'))
    console.log(e.currentTarget.value)
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/start`, { _id: instance, objectId: objectId })
      .then(response => {
        console.log(`⭐️⭐️⭐️⭐️`, response)
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
  
  let creatingList =
    dinnerPlans.map((list, i) => {
      let placeText = `${list.name}`;
      if (list.started && list.complete) {
        return (
          <ListItem key={list.instance}>
            <ListItemText primary={placeText} />
            <Button variant="contained" color="" value2={list._id} value={list.instance} onClick={buttonHandlerView}>View Restaurant</Button>
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
      else if (list.started && !list.complete) {
        return (
          <ListItem key={list.instance}>
            <ListItemText primary={placeText} />
            <Button variant="contained" color="primary" value2={list._id} value={list.instance} onClick={buttonHandlerFinish}>Finish Matching</Button>
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
  if (redirect) return <Redirect to={{pathname:'/restaurants', instanceId: instanceId}}
  // render={(props) => {
  //   // let instance = instanceDetails.find(({ created }) => created == props.match.params.id)
  //   // props = { ...instance, ...props }
  //   return <Restaurants instanceDetails={instanceDetails} propsTest={test} {...props} />
  // }} 

  />
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

