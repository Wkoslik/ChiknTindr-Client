import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import {
    Grid,
    Paper,
    Button,
    Typography,
    ThemeProvider
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import theme from '../../theme/theme';
import { fontWeight } from '@material-ui/system';

const Profile = (props) => {
    const [message, setMessage] = useState('Loading msg ...');
    console.log(props)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
            .then(response => {
            setMessage(response.data.message)
            })
            .catch(err => {
            console.log('error  in useEffect', err)
            setMessage(err.message);
            props.handleAuth(null);
            })
    }, []);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            maxWidth: 600,
            margin: "auto",
            paddingTop: "10vh",
            paddingLeft: '5vw',
            paddingRight: '5vw',
            height: "100%",
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        paper1: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: '15vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '1em'
        },
        title: {
            fontFamily: "Paytone One",
            fontSize: "1.5em",
            color: "#ED1C24",
        },
        sometext: {
            marginTop: '4vh',
            marginBottom: '2vh',
            fontWeight: 500,
            fontSize: '1.25em',
            color: 'gray'
        }
    }));
    const classes = useStyles();


    if (!props.currentUser) return <Redirect to='/' />
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={0} >
                            <Paper square elevation={0} className={classes.title}>
                                <Typography className={classes.title}>
                                    Welcome to ChiknTindr!
                                </Typography>
                                    {/* TODO: add user info here */}
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper1}>
                            <Paper square elevation={0} >
                                <Typography className={classes.sometext}>
                                    See all of your munching plans!
                                </Typography>

                                <Button variant="contained" color="secondary"><Link className="nav-link2" to="/plans" currentUser={props.currentUser}>Dine Status</Link></Button>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper1}>
                            <Paper square elevation={0} >
                                <Typography className={classes.sometext}>
                                    Start your munching here!
                                </Typography>
                                <Button variant="contained" color="secondary"><Link className="nav-link2" to="/preferences" currentUser={props.currentUser}>Start Dine</Link></Button>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}
export default Profile;