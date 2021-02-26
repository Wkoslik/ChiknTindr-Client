import { Link } from 'react-router-dom'
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
    ThemeProvider,
    Box
} from '@material-ui/core';

import theme from '../../theme/theme';

const Home = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: "auto",
            height: "100vh",
            backgroundImage: `url(${"img/landingbackground.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
        },
        home_container: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container className={classes.home_container}>
                    <Grid item xs={12}>
                        <Typography variant="h1" align="center" className="classes.welcome">
                            <Box fontWeight={900} style={{ color: "white", marginBottom: "4rem" }}>MATCH, <br></br>Enjoy your meal</Box>
                        </Typography>
                    </Grid>
                    <Button color="secondary" variant="contained" size="large" ><Link className="nav-link2" to="/auth/login">to login/signup</Link></Button>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Home