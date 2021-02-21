import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Toolbar, 
    AppBar, 
    ThemeProvider, 
    IconButton,
    Typography,
    Badge,
    MenuItem,
    Menu,
    Button,
    useMediaQuery
} from '@material-ui/core';
import {
    AccountCircle
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import theme from '../../theme/theme';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 2,
    },
    popMenu: {
        display: "flex",
        flexDirection: "column"
    }
}));

const Header = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    
    let conditionalLinks = props.currentUser ?
    <nav>
        <Button
            variant="contained"
        >
            <Link className="nav-link" to='/'>Home</Link>
        </Button>
        <Button
            variant="contained"
        >
            <Link className="nav-link" to='/profile'>Account</Link>
        </Button>
        <Button
            variant="contained"
        >
            <Link className="nav-link" to='/about'>RESTaurateurs</Link> 
        </Button>
        <Button
            variant="contained"
        >
            <span className="nav-link" onClick={e => props.handleAuth(null)}>logout</span>
        </Button>
    </nav> :
    <nav>
        <Button
            variant="contained"
            href="/"
        >
            Home
        </Button>
        <Button
            variant="contained"
            href="/auth/login"
        >
            Login
        </Button>
        <Button
            variant="contained"
            href="/about"
        >
            RESTaurateurs
        </Button>
        {/* <Link className="nav-link" to='/'>Home</Link>{' | '} */}
        {/* <Link className="nav-link" to='/auth/login'>Login</Link> */}
    </nav>

    return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        HEADER
                    </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        className={classes.popMenu}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        {conditionalLinks}
                    </Menu>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
    )
}

export default Header;
