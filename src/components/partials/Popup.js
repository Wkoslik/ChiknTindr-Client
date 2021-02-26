import {
  Grid,
  Paper,
  Button,
  Typography,
  ThemeProvider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import theme from '../../theme/theme';

const Popup = (props) => {
  // getting parent state
  const prevState = useRef();
  const [friendsReq2, setFriendsReq2] = useState(Boolean);

  // useEffect(() => {
  //   props.AppState(friendsReq2);
  // }, [props.AppState, friendsReq2]);



  // ------------------------------------------ styles
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: "auto",
      paddingTop: '11vh',
      paddingLeft: '5vw',
      paddingRight: '5vw',
      height: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      maxWidth: 500,
      margin: 'auto'
    },
    notice: {
      fontFamily: "Paytone One",
      fontSize: "1.5em",
      color: "#ED1C24",
    },
    noticeButton: {
      marginTop: '1em'
    }
  }));

  const classes = useStyles();

  // --------------------------------------------------- e. handler

  const handleNoticeButton = e => {
    props.setFriendsReq(false);
    console.log('notice button clicked')
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
              <Paper square elevation={0} className={classes.title}>
                <Typography className={classes.notice}>
                  You're friend has chosen restaurant
                </Typography>
                {/* TODO: change link to="/plans below" */}
                <Button className={classes.noticeButton} onClick={handleNoticeButton}  variant="contained" color="secondary"><Link className="nav-link2" to='/auth/login'>See Plans</Link></Button> 
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default Popup;