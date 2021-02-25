import { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { Redirect, Link } from 'react-router-dom';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import {
    ThemeProvider,
    Grid,
    Paper,
    FormLabel,
    Button,
    TextField,
    Typography
} from '@material-ui/core';

import theme from '../../theme/theme';

// TODO move into own file
// I will make ternary state to handle this using material-ui. don't need to make another file. - Young
// const Error = (props) => {
//     useEffect(() => {
//         console.log(props.error);
//     }, []);

//     return (
//         <div className="error-card">
//             <h3>ERROR!</h3>
//             <p>{props.error.message}</p>
//         </div>
//     )
// }


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
    e.preventDefault();
    // console.log('am I hitting the submit?')

        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/login`,
            { email, password }
        ).then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            setAuthToken(response.data.token);
            props.handleAuth(response.data.user);
            setRedirect(true);
        }).catch(setError)
    }

//TODO LOGIN PAGE logo not loading
    // material-ui styles
    const useStyles = makeStyles((theme) => ({
        form: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
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
            margin: "0 auto"
        },
        formtitle: {
            color: "red"
        }
    }));

    const classes = useStyles();

    if (redirect) return <Redirect to='/invite' /> //TODO change to route to /invite
    return (
        <section>
            {/* {error ? <Error error={error} /> : null} */}
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                                    <FormLabel className={classes.formtitle}>
                                        Login
                                    </FormLabel>
                                    <div>
                                        {error ?
                                            <>
                                                <TextField
                                                    required
                                                    error
                                                    id="email"
                                                    label="Email"
                                                    placeholder="Email"
                                                    variant="outlined"
                                                    defaultValue={email}
                                                    value={email}
                                                    helperText="Check email and password again"
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                                <TextField
                                                    hintText="Password"
                                                    floatingLabelText="Password"
                                                    required
                                                    error
                                                    type="password"
                                                    id="password"
                                                    label="password"
                                                    placeholder="password"
                                                    variant="outlined"
                                                    helperText="Check email and password again"
                                                    defaultValue={password}
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </>
                                            :
                                            <>
                                                <TextField
                                                    required
                                                    id="email"
                                                    label="Email"
                                                    placeholder="Email"
                                                    variant="outlined"
                                                    color="secondary"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                                <TextField
                                                    hintText="Password"
                                                    floatingLabelText="Password"
                                                    required
                                                    type="password"
                                                    id="password"
                                                    label="password"
                                                    placeholder="password"
                                                    variant="outlined"
                                                    color="secondary"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </>
                                        }
                                    </div>
                                    <Button variant="contained" color="primary" type="submit">Log In</Button>
                                </form>
                                <Typography className={classes.linkSignUp}>
                                    New to ChiknTindr? <Link className="signup-text" to="/auth/signup">Signup here</Link>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </section>
    );
}
export default Login;