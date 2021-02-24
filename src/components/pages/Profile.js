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

const Profile = (props) => {
    const [message, setMessage] = useState('Loading msg ...');

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
            margin: "0 auto"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    }));
    const classes = useStyles();


    if (!props.currentUser) return <Redirect to='/auth/login' />
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Paper square elevation={0} className={classes.title}>
                                <Typography>
                                    Welcome to ChiknTindr!
                                </Typography>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Paper square elevation={0} >
                                <Typography>
                                    See all of your munching plans!
                                    {/* TODO: add user info here */}
                                </Typography>
                                <Button variant="contained" color="primary"><Link className="nav-link" to="/dinnerplans">Dine Status</Link></Button>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Paper square elevation={0} >
                                <Typography>
                                    Start your munching here!
                                </Typography>
                                <Button variant="contained" color="primary"><Link className="nav-link" to="/preference">Start Dine</Link></Button>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}
export default Profile;