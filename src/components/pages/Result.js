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


import themeMain from '../../theme/theme';

const yelpEndPointJSON = [
  {
    "id": "WavvLdfdP6g8aZTtbBQHTw",
    "alias": "gary-danko-san-francisco",
    "name": "Gary Danko",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "url": "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
    "phone": "+14157492060",
    "display_phone": "(415) 749-2060",
    "review_count": 5296,
    "categories": [
      {
        "alias": "newamerican",
        "title": "American (New)"
      },
      {
        "alias": "french",
        "title": "French"
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars"
      }
    ],
    "rating": 4.5,
    "location": {
      "address1": "800 N Point St",
      "address2": "",
      "address3": "",
      "city": "San Francisco",
      "zip_code": "94109",
      "country": "US",
      "state": "CA",
      "display_address": [
        "800 N Point St",
        "San Francisco, CA 94109"
      ],
      "cross_streets": ""
    },
    "coordinates": {
      "latitude": 37.80587,
      "longitude": -122.42058
    },
    "photos": [
      "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
    ],
    "price": "$$$$",
    "hours": [
      {
        "open": [
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 0
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 1
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 2
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 3
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 4
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 5
          },
          {
            "is_overnight": false,
            "start": "1730",
            "end": "2200",
            "day": 6
          }
        ],
        "hours_type": "REGULAR",
        "is_open_now": false
      }
    ],
    "transactions": [],
    "special_hours": [
      {
        "date": "2019-02-07",
        "is_closed": null,
        "start": "1600",
        "end": "2000",
        "is_overnight": false
      }
    ]
  }
]

const Result = (props) => {

  // --------------------------------------------------------------- set states
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState('');
  const [redirect, setRedirect] = useState(false)
  const [instanceDetails, setInstanceDetails] = useState({})
  const [instanceId, setInstanceId] = useState('')
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() =>{
    console.log('hi!')
  }, [])

  const maxSteps = yelpEndPointJSON[0].photos.length;
  // --------------------------------------------------------------- e. handlers

  const handleNext = () => {
    console.log('is next img showing?')
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    console.log('is prev img showing?')
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  console.log(yelpEndPointJSON[0], "getting the JSON");

  // ---------------------------------------------------- changing values from JSON

  const priceToNumber = yelpEndPointJSON[0].price.length;
  
  const combineAddress = 
    `${yelpEndPointJSON[0].location.address1} 
    ${yelpEndPointJSON[0].location.city} 
    ${yelpEndPointJSON[0].location.state} 
    ${yelpEndPointJSON[0].location.zip_code}`
  console.log(combineAddress, "full address")

  let categoryTitles = []

  let gettingCategoryTitles = 
    yelpEndPointJSON[0].categories.map((category, i) => {
      categoryTitles.push(category.title)
    })

  let titleString = categoryTitles.join(', ')

  const combineYelpCounts = 
    `${yelpEndPointJSON[0].review_count} reviews`

  // getting the operation hours

  console.log(yelpEndPointJSON[0].hours[0].open, "before map")

  let gettingHours =
    yelpEndPointJSON[0].hours[0].open.map((detail, i) => {

      let workStart
      if (parseInt(detail.start) > 1200) {
        let intoNum = parseInt(detail.start) - 1200;
        let intoStr = intoNum.toString();
        let hours = intoStr.substr(0, intoStr.length -2)
        let mins = intoStr.substr(intoStr.length -2, intoStr.length);
        workStart = `${hours} : ${mins} PM`
      } else {
        let hours = detail.start.substr(0, detail.start.length -2)
        let mins = detail.start.substr(detail.start.length -2, detail.start.length);
        workStart = `${hours} : ${mins} AM` 
      };

      let workEnd
      if (parseInt(detail.end) > 1200) {
        let intoNum = parseInt(detail.end) - 1200;
        let intoStr = intoNum.toString();
        let hours = intoStr.substr(0, intoStr.length -2)
        let mins = intoStr.substr(intoStr.length -2, intoStr.length);
        workEnd = `${hours} : ${mins} PM`
      } else {
        let hours = detail.end.substr(0, detail.start.length -2)
        let mins = detail.end.substr(detail.end.length -2, detail.end.length);
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
  let yelpLink = <a className="yelplink" href={yelpEndPointJSON[0].url} target="_blank" rel="noopener noreferrer">See this restaurant on Yelp</a>

  // phonecall

  let phoneNum = `tel:${yelpEndPointJSON[0].phone}`

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
                  You and Your friend has matched to <br /> <span className="chosen-restaurant"><strong>{yelpEndPointJSON[0].name} !</strong></span>
                  {/* TODO: get user, and friend name above */}
                </Typography>
                <Button href={phoneNum} className={classes.firstButton} color="secondary" variant="contained"> Call for reservation</Button>
                {/* TODO: add phone calling function */}
              </Paper>
            </Paper>
            <Paper className={classes.paper}>
              <Paper square elevation={0} className={classes.header}>
                <Typography>
                  <strong>{yelpEndPointJSON[0].name}</strong>
                </Typography>
              </Paper>
                <img
                  className={classes.img}
                  src={yelpEndPointJSON[0].photos[activeStep]}
                  alt={yelpEndPointJSON[0].name}
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
                    <Rating name='rating' defaultValue={yelpEndPointJSON[0].rating} precision={0.5} readOnly />
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
                          <ListItemText primary="Phone Number" secondary={yelpEndPointJSON[0].display_phone} />
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
    </div>
  );
}
export default Result;



// coming back users (after log in redirect to =? )
// -Profile page
//  -dinner plans
//  -invite - preference
//  -see friends (stretch goal)

// tonight
// landing page (profile)
// home page
// friends list page (stretch)