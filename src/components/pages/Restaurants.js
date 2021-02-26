import { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import {
  Grid,
  Paper,
  Button,
  MobileStepper,
  Typography,
  ThemeProvider,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Footer from '../partials/Footer';
import theme from '../../theme/theme';
import { RestoreRounded } from '@material-ui/icons';
//TODO: Here is stashed code from whitney update!!!!!
const Restaurants = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState('');
  const [redirect, setRedirect] = useState(false)
  const [instanceId, setInstanceId] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const [userEmail, setUserEmail] = useState(props.currentUser.Email)
  const [isCreator, setIsCreator] = useState(false)
  const [resultRedirect, setResultRedirect] = useState(false)
  const [yelpId, setYelpId] = useState('')


  useEffect(() => {
    setInstanceId(props.location.instanceId)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/game/restaurants/${props.location.instanceId}`)
      .then(response => {
        setRestaurants(response.data.restaurants)
        // console.log(response.data)
        if(userEmail === response.data.creator){
          
          setIsCreator(true)
        }
      })
      .catch(err =>{
        console.log('There was an error in useeffect in restaurant.js')
      })
  }, [])

  let maxSteps = restaurants.length - 1;

  const handleConfirm = e => {
    let val = e.currentTarget.value
    let boolvote = true
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/gameVote`, {instanceId: instanceId, restId: val, vote: boolvote})
      .then(response => {
        console.log(response.data)
        let details = response.data
        console.log(activeStep)
        if(response.data.creatorArr[activeStep] === response.data.playerArr[activeStep]){
          console.log(response.data.restaurants[activeStep].yelpNum)
          setYelpId(response.data.result.yelpAPI)
          setResultRedirect(true)
        }
      })
      .catch(err =>{
        console.log(err.message)
      })
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === maxSteps){
      setRedirect(true)
    }
  };

  console.log(yelpId)
  const handleNext = (e) => {

    let val2 = e.currentTarget.value
    let boolvote = false

    axios.patch(`${process.env.REACT_APP_SERVER_URL}/game/gameVote`, {instanceId: instanceId, restId: val2, vote: boolvote})
      .then(response => {
      })
      .catch(err =>{
        console.log(err.message)
      })
    // hit same pipeline  push the vote

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === maxSteps){
      setRedirect(true)
    }
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: '1.5em'
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: '1.5em',
      marginTop: '-2.5em'
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    img: {
      overflow: "hidden",
      display: "block",
      width: "100%",
      position: "relative",
      objectFit: 'cover',
      height: "500px"
    },
    list: {
      display: "block",
    },
    title: {
      fontFamily: "Paytone One",
      fontSize: "1.5em",
      color: "#ED1C24",
      marginTop: ".25em"
    },
    lastGrid: {
      marginBottom: "2em"
    },
  }));

  const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  const classes = useStyles();

if (!props.currentUser) return <Redirect to='/' />
if (redirect) return <Redirect to='/plans' />
if (resultRedirect) return <Redirect to={{ pathname: '/result', yelpApi: yelpId }} />


if(restaurants.length === 0){
  return(
    <span>Loading...</span>
  )
}else {
  const priceToNumber = restaurants[activeStep].price.length

  const combineAddress = `${restaurants[activeStep].location[0].address1} ${restaurants[activeStep].location[0].city} ${restaurants[activeStep].location[0].state} ${restaurants[activeStep].location[0].zip_code}`
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid className={classes.firstGrid} item xs={12}>
              <Paper className={classes.paper} elevation={0} >
                  <Paper square elevation={0} className={classes.title}>
                      <Typography className={classes.title}>
                        Select your restaurant
                      </Typography>
                  </Paper>
              </Paper>
            </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper2}>
              <Paper square elevation={0} className={classes.header}>
                <Typography>
                  <strong>{restaurants[activeStep].name}</strong>

                </Typography>
              </Paper>
              <img
                className={classes.img}


                src={restaurants[activeStep].imageUrl}
                alt={restaurants[activeStep].name}
              />
              <Paper square elevation={0} className={classes.header}>
                <Typography>
                  Category: {restaurants[activeStep].categories[0].title}
                </Typography>
              </Paper>
              {/* <Paper square elevation={0} className={classes.header}>
                <Rating name="rating" defaultValue={restaurants[activeStep].rating} precision={0.5} readOnly />
              </Paper> //TODO fix rating */}
              <Paper square elevation={0} className={classes.header}>
                <Rating name="price" defaultValue={priceToNumber} max={4} icon={<AttachMoneyIcon />} readOnly />
              </Paper>
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.root2}
                nextButton={

                  <Button variant="contained" value={restaurants[activeStep]._id} color="secondary" size="medium" onClick={handleConfirm}>
                    Select&nbsp;&nbsp;<CheckCircleIcon />  
                  </Button>
                } 
                backButton={
                  <Button variant="contained" value={restaurants[activeStep]._id} size="medium" color="primary" onClick={handleNext} >
                    <CancelIcon />&nbsp;&nbsp;Next
                  </Button>
                }
              />
              </Paper>
            <Paper className={classes.lastGrid}>
              {/* <List>
                <ListItem className={classes.list}>
                  <ListItemText primary="Categories" secondary={categoryDetail} />
                  <ListItemText primary="Ratings" secondary={
                    <Rating name="rating" defaultValue={yelpJSON[activeStep].businesses[0].rating} precision={0.5} readOnly />
                  } />
                  <ListItemText primary="Price" secondary={
                    <Rating name="price" defaultValue={priceToNumber} max={4} icon={<AttachMoneyIcon />} readOnly />
                  } />
                </ListItem>
              </List> */}
                  {/* TODO: commented out list above */}
              <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>
                    More Info
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem className={classes.list}>
                      <ListItemText primary="Address" secondary={combineAddress} />
                      <ListItemText primary="Phone Number" secondary={restaurants[activeStep].number} />
                      {/* <ListItemText primary="Reviews" secondary={restaurants[activeStep].review_count} /> //TODO fix review count */}
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
}

export default Restaurants;
