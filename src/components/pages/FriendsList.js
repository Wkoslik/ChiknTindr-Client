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

import { Redirect, Link } from 'react-router-dom';

// ------------------------------------------ mock JSON data

const friendJSON = [
  {
    "friendslist": [
      {
        "name": "Wally the Whale",
        "email": "testwhale@test.com"
      },
      {
        "name": "Roger Rabbit",
        "email": "test20@test.com"
      },
      {
        "name": "Scooba Steve",
        "email": "test666@test.com"
      },
      {
        "name": "Wally the Whale",
        "email": "testwhale@test.com"
      }
    ]
  }
];

const FriendsList = (props) => {

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: "0 auto",
    paddingTop: "10vh",
    paddingLeft: '5vw',
    paddingRight: '5vw',
    height: "100%",
  },
  title: {
    fontFamily: "Paytone One",
    fontSize: "2em",
    color: "#ED1C24",
    marginBottom: "1em"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  noFriend: {
    textAlign: 'center',
    marginBottom: '1em'
  }
}));

const classes = useStyles();

console.log(friendJSON[0].friendslist, 'dummy data')
// ---------------------------------------------- e.handler

const buttonHandler = e => {
  console.log('clicked button')
}

// ---------------------------------------------- mapping JSON

let frdListJSON =
  friendJSON[0].friendslist.length == 0 ?
  <>
      <Typography className={classes.noFriend}>
        There is not any friend registered. Please invite your friend.
      </Typography>
      <Button variant="contained" color="secondary"><Link className="nav-link2" to='/profile'>Profile</Link></Button>
  </>
  :
  friendJSON[0].friendslist.map((friend, i) => {
    console.log(friend, 'inside map')
    let name = `${friend.name}`;
    let email = `${friend.email}`;
    return (
      <ListItem>
        <ListItemText primary={name} secondary={email}/>
        <Button variant="contained" color="secondary" onClick={buttonHandler}>Select Friend</Button>
      </ListItem>
    )
  })

// if (!props.currentUser) return <Redirect to='/login' />
// TODO: uncomment above after merge
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.title}>
                Friends List
              </Typography>
              <List className={classes.list}>
                {frdListJSON}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default FriendsList;