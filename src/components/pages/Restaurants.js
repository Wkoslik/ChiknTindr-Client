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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import theme from '../../theme/theme';

const yelpJSON = [
  {
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    
    // yelp JSON searched array data
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
},
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee2",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    
    // yelp JSON searched array data
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
},
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee3",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    
    // yelp JSON searched array data
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
},
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee4",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    
    // yelp JSON searched array data
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
},
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee5",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    
    // yelp JSON searched array data
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}
];

const Restaurants = (props) => {
  
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState('');
  
  const maxSteps = yelpJSON.length - 1;
  // console.log(yelpJSON[2].businesses[0], 'activeStep')

  const handleConfirm = () => {
    console.log('this restaurant has been selected');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // TODO: push like to db
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('this restaurant has been resigned, moving on to next restaurant')
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

  // const priceToNumber = yelpJSON[activeStep].businesses[0].price.length

  // const combineAddress = `${yelpJSON[activeStep].businesses[0].location.address1} ${yelpJSON[activeStep].businesses[0].location.city} ${yelpJSON[activeStep].businesses[0].location.state} ${yelpJSON[activeStep].businesses[0].location.zip_code}`

  // const categoryDetail = yelpJSON[activeStep].businesses[0].categories[0].title;

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
                src={restaurants[activeStep].image_url}
                alt={restaurants[activeStep].name}
              />
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
                  <Button variant="contained" value={restaurants[activeStep]._id} size="medium" color="primary" onClick={handleNext} disabled={activeStep === maxSteps}>
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
                      {/* <ListItemText primary="Reviews" secondary={yelpJSON[activeStep].businesses[0].review_count} /> */}
                      {/* TODO: commented out reviews above */}
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default Restaurants;
