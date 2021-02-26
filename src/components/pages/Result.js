import { useState, useEffect } from 'react';
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
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer from '../partials/Footer';
import themeMain from '../../theme/theme';

const Result = (props) => {

  // --------------------------------------------------------------- set states
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState('');
  const [redirect, setRedirect] = useState(false)
  const [instanceDetails, setInstanceDetails] = useState({})
  const [resultId, setResultId] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [maxSteps, setMaxSteps] = useState(0)


  useEffect(() => {
    setResultId(props.location.yelpApi)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/game/result/${props.location.yelpApi}`)
      .then(response => {
        setInstanceDetails(response.data)
        setMaxSteps(response.data.photos.length)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  // -------------------------------------------------------------- styles
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
    },
    title2: {
      color: 'gray'
    },
    firstButton: {
      marginTop: '2em',
      marginBottom: '1em'
    },
    firstGrid: {
      marginTop: '0'
    },
    restGrid: {
      marginBottom: '1em',
      marginTop: '-3em'
    },
    lastGrid: {

    }
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

  // --------------------------------------------------------------- e. handlers

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // ---------------------------------------------------- changing values from JSON
  if (!props.currentUser) return <Redirect to='/' />

  if (JSON.stringify(instanceDetails) === '{}') {
    return (
      <h1>Loading</h1>
    )
  } else {

    const priceToNumber = instanceDetails.price.length;

    const combineAddress =
      `${instanceDetails.location.address1} 
    ${instanceDetails.location.city} 
    ${instanceDetails.location.state} 
    ${instanceDetails.location.zip_code}`
    // console.log(combineAddress, "full address")

    let categoryTitles = []

    let gettingCategoryTitles =
      instanceDetails.categories.map((category, i) => {
        categoryTitles.push(category.title)
      })

    let titleString = categoryTitles.join(', ')

    const combineYelpCounts =
      `${instanceDetails.review_count} reviews`

    // getting the operation hours

    let gettingHours =
      instanceDetails.hours[0].open.map((detail, i) => {

        let workStart
        if (parseInt(detail.start) > 1200) {
          let intoNum = parseInt(detail.start) - 1200;
          let intoStr = intoNum.toString();
          let hours = intoStr.substr(0, intoStr.length - 2)
          let mins = intoStr.substr(intoStr.length - 2, intoStr.length);
          workStart = `${hours} : ${mins} PM`
        } else {
          let hours = detail.start.substr(0, detail.start.length - 2)
          let mins = detail.start.substr(detail.start.length - 2, detail.start.length);
          workStart = `${hours} : ${mins} AM`
        };

        let workEnd
        if (parseInt(detail.end) > 1200) {
          let intoNum = parseInt(detail.end) - 1200;
          let intoStr = intoNum.toString();
          let hours = intoStr.substr(0, intoStr.length - 2)
          let mins = intoStr.substr(intoStr.length - 2, intoStr.length);
          workEnd = `${hours} : ${mins} PM`
        } else {
          let hours = detail.end.substr(0, detail.start.length - 2)
          let mins = detail.end.substr(detail.end.length - 2, detail.end.length);
          workEnd = `${hours} : ${mins} AM`
        };

        let workDay
        if (detail.day == 0) {
          workDay = "Monday"
        } else if (detail.day == 1) {
          workDay = "Tuesday"
        } else if (detail.day == 2) {
          workDay = "Wednesday"
        } else if (detail.day == 3) {
          workDay = "Thursday"
        } else if (detail.day == 4) {
          workDay = "Friday"
        } else if (detail.day == 5) {
          workDay = "Saturday"
        } else if (detail.day == 6) {
          workDay = "Sunday"
        };

        let displayTime = `${workStart} ~ ${workEnd}`

        return (
          <ListItemText id="hours-of-op" primary={workDay} secondary={displayTime} />
        )
      })

    // Yelplink
    let yelpLink = <a className="yelplink" href={instanceDetails.url} target="_blank" rel="noopener noreferrer">See this restaurant on Yelp</a>

    // phonecall

    let phoneNum = `tel:${instanceDetails.phone}`



    return (
      <div className={classes.root}>
        <ThemeProvider theme={themeMain}>
          <Grid container spacing={3}>
            <Grid className={classes.firstGrid} item xs={12}>
              <Paper className={classes.paper} elevation={0} >
                <Paper square elevation={0} className={classes.title}>
                  <Typography className={classes.title}>
                    Congratulations!
                    </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid className={classes.restGrid} item xs={12}>
              <Paper elevation={0} className={classes.paper}>
                <Paper square elevation={0} className={classes.title2}>
                  <Typography>
                    You and your friend have matched to <br /> <span className="chosen-restaurant"><strong>{instanceDetails.name} !</strong></span>
                  </Typography>
                  <Button href={phoneNum} className={classes.firstButton} color="secondary" variant="contained"> Call for reservations</Button>
                </Paper>
              </Paper>
              <Paper className={classes.paper}>
                <Paper square elevation={0} className={classes.header}>
                  <Typography>
                    <strong>{instanceDetails.name}</strong>
                  </Typography>
                </Paper>
                <img
                  className={classes.img}
                  src={instanceDetails.photos[activeStep]}
                  alt={instanceDetails.name}
                />
                <MobileStepper
                  variant="dots"
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  className={classes.root2}
                  nextButton={
                    <Button color="primary" size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next</Button>
                  }
                  backButton={
                    <Button color="primary" size="small" onClick={handlePrev} disabled={activeStep === 0}>Prev</Button>
                  }
                />
              </Paper>
              <Paper className={classes.lastGrid}>
                <List>
                  <ListItem className={classes.list}>
                    <ListItemText primary="Categories" secondary={titleString}></ListItemText>
                    <ListItemText primary="Ratings" secondary={
                      <Rating name='rating' defaultValue={instanceDetails.rating} precision={0.5} readOnly />
                    }
                    />
                    <ListItemText primary="Price" secondary={
                      <Rating name="price" defaultValue={priceToNumber} max={4} icon={<AttachMoneyIcon />} readOnly />
                    }
                    />
                    <Accordion square expanded={expanded === 'panel1'} onChange={handlePanel('panel1')}>
                      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                          More Info
                      </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem className={classes.list}>
                            <ListItemText primary="Address" secondary={combineAddress} />
                            <ListItemText primary="Phone Number" secondary={instanceDetails.display_phone} />
                            <ListItemText primary="Yelp review counts" secondary={combineYelpCounts} />
                            <ListItemText primary="Hours of operation" secondary={gettingHours} />
                            <ListItemText primary="Link to yelp page" secondary={yelpLink} />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
}

export default Result;
