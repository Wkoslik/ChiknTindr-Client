import { useState } from 'react';
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
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import theme from '../../theme/theme';

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
      margin: "0 auto"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
      width: "100%"
    },
    list: {
      display: "block",
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
  const theme = useTheme();

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
      console.log(category.title, "what is this?")
      categoryTitles.push(category.title)
    })

  let titleString = categoryTitles.join(', ')

  const combineYelpCounts = 
    `${yelpEndPointJSON[0].review_count} reviews`


  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Paper square elevation={0} className={classes.title}>
                <Typography>
                  You and Your friend has matched to <strong>{yelpEndPointJSON[0].name} !</strong>
                </Typography>
                <Button color="primary"> Click here to make a call for reservation</Button>
                {/* TODO: add phone calling function */}
              </Paper>
            </Paper>
            <Paper className={classes.paper}>
              <Paper square elevation={0} className={classes.header}>
                <Typography>
                  {yelpEndPointJSON[0].name}
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
                className={classes.root}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next</Button>
                }
                backButton={
                  <Button size="small" onClick={handlePrev} disabled={activeStep === 0}>Prev</Button>
                }
              />
            </Paper>
            <Paper square>
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
                          <ListItemText primary="Hours of operation" />
                          <ListItemText primary="Link to yelp page" />
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
    //   <p>more info</p>
    //   <p>address</p>
    //   <p>Phone number</p>
    //   <p>reviews</p>
    //   <p>link to yelp page</p>
    //   <p>hours of operation</p>
  );
}
export default Result;