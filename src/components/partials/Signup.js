import { useState } from 'react';
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';

import { Redirect } from 'react-router-dom';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import {
    ThemeProvider,
    Grid,
    Paper,
    FormLabel,
    Button,
    TextField,
} from '@material-ui/core';
import theme from '../../theme/theme';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [matchPw, setMatchPw] = useState(true);
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // confirm password
        if (password == confirmPassword) {
            setMatchPw(true);
            // sending data
            e.preventDefault();
            axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api/signup`,
                { name, email, password }
            ).then(response => {
                console.log(response.data)
                localStorage.setItem('jwtToken', response.data.token); 
                setAuthToken(response.data.token);
                props.handleAuth(response.data.user);
                setRedirect(true);
            }).catch(err => console.log(`😖 error`, err));
        } else {
            // change form entry
            console.log('pw not matching')
            setMatchPw(false);
        }

    }

    // material-ui styles
    const useStyles = makeStyles((theme) => ({
        form: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
                marginTop: '2em',
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
            margin: "auto",
            paddingTop: "10vh",
            paddingLeft: '5vw',
            paddingRight: '5vw',
            height: "100%",
        },
        formtitle: {
            fontFamily: "Paytone One",
            fontSize: "2em",
            color: "#ED1C24",
        },
        formEntry: {
            marginBottom: '2em'
        },
        linkButton: {
            marginBottom: '1em'
        }
    }));

    const classes = useStyles();
    if (redirect) return <Redirect to='/preferences' />
    return (
        <section>
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                                    <FormLabel className={classes.formtitle}>
                                        SignUp
                                    </FormLabel>
                                    <div className={classes.formEntry}>
                                        <TextField
                                            required
                                            id="name"
                                            label="Name"
                                            placeholder="Name"
                                            variant="outlined"
                                            color="secondary"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
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
                                        {matchPw ?
                                        <>
                                            <TextField
                                                hintText="Password"
                                                floatingLabelText="Password"
                                                required
                                                type="password"
                                                id="password"
                                                label="Password"
                                                placeholder="Password"
                                                variant="outlined"
                                                color="secondary"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            <TextField
                                                hintText="Confirm Password"
                                                floatingLabelText="Confirm Password"
                                                required
                                                type="password"
                                                id="password-confirm"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                variant="outlined"
                                                color="secondary"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                        </>
                                        :
                                        <>
                                            <TextField
                                                hintText="Password"
                                                floatingLabelText="Password"
                                                required
                                                error
                                                type="password"
                                                id="password"
                                                label="Password"
                                                placeholder="Password"
                                                variant="outlined"
                                                color="secondary"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            <TextField
                                                hintText="Confirm Password"
                                                floatingLabelText="Confirm Password"
                                                required
                                                error
                                                type="password"
                                                id="password-confirm"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                variant="outlined"
                                                color="secondary"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                        </>
                                        }
                                    </div>
                                    <Button className={classes.linkButton} variant="contained" color="secondary" type="submit">SignUp</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </section>
    );
}
export default Signup;