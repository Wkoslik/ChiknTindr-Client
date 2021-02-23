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
    // TODO: add from password verification
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
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
    }

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
//TODO logo not loading
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
                                    <div>
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
                                    </div>
                                    <Button variant="contained" color="primary" type="submit">SignUp</Button>
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