// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { 
//     Toolbar, 
//     AppBar, 
//     ThemeProvider, 
//     IconButton,
//     Typography,
//     Badge,
//     MenuItem,
//     Menu,
//     Button
// } from '@material-ui/core';
// import {
//     AccountCircle
// } from '@material-ui/icons';
// import MenuIcon from '@material-ui/icons/Menu';
// import NotificationIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

// import theme from '../../theme/theme';

// const useStyles = makeStyles(theme => ({
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         }
//     },
//     popMenu: {
//         display: "flex",
//         flexDirection: "column"
//     },
//     sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',
//         },
//     },
//     sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
// }));

// const Header = (props) => {
//     const { history } = props;
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    
//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };
    
//     const menuId = 'primary-search-account-menu';

//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const renderMenuLoggedIn = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >

//             <MenuItem>
//             <IconButton aria-label="show 11 new notifications" color="inherit">
//                 <Badge badgeContent={11} color="secondary">
//                     <NotificationIcon />
//                 </Badge>
//             </IconButton>
//             <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//             <IconButton
//                 aria-label="account of current user"
//                 aria-controls="primary-search-account-menu"
//                 aria-haspopup="true"
//                 color="inherit"
//             >
//                 <AccountCircle />
//             </IconButton>
//             <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );

//     const renderMobileMenuLoggedIn = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >

//             <MenuItem>
//             <IconButton aria-label="show 11 new notifications" color="inherit">
//                 <Badge badgeContent={11} color="secondary">
//                     <NotificationIcon />
//                 </Badge>
//             </IconButton>
//             <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//             <IconButton
//                 aria-label="account of current user"
//                 aria-controls="primary-search-account-menu"
//                 aria-haspopup="true"
//                 color="inherit"
//             >
//                 <AccountCircle />
//             </IconButton>
//             <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );

//     let conditionalLinks = props.currentUser ?
//     <nav>
//         <Button
//             variant="contained"
//         >
//             <Link className="nav-link" to='/'>Home</Link>
//         </Button>
//         <Button
//             variant="contained"
//         >
//             <Link className="nav-link" to='/profile'>Account</Link>
//         </Button>
//         <Button
//             variant="contained"
//         >
//             <Link className="nav-link" to='/about'>RESTaurateurs</Link> 
//         </Button>
//         <Button
//             variant="contained"
//         >
//             <span className="nav-link" onClick={e => props.handleAuth(null)}>logout</span>
//         </Button>
//     </nav>
//     :
//     <nav>
//         <Button
//             variant="contained"
//             href="/"
//         >
//             Home
//         </Button>
//         <Button
//             variant="contained"
//             href="/auth/login"
//         >
//             Login
//         </Button>
//         <Button
//             variant="contained"
//             href="/about"
//         >
//             RESTaurateurs
//         </Button>
//         {/* <Link className="nav-link" to='/'>Home</Link>{' | '} */}
//         {/* <Link className="nav-link" to='/auth/login'>Login</Link> */}
//     </nav>

//     return (
//     <div className={classes.root}>
//         <ThemeProvider theme={theme}>
//             <AppBar elevation={0} color="primary" position="static">
//                 <Toolbar>
//                     <Typography variant="h6" className={classes.title}>
//                         HEADER
//                     </Typography>
//                     <IconButton
//                         edge="start"
//                         className={classes.menuButton}
//                         color="inherit"
//                         aria-label="menu"
//                         onClick={renderMenu}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu
//                         id="menu-appbar"
//                         className={classes.popMenu}
//                         anchorEl={anchorEl}
//                         anchorOrigin={{
//                         vertical: "top",
//                         horizontal: "right"
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                         vertical: "top",
//                         horizontal: "right"
//                         }}
//                         open={isMenuOpen}
//                         onClose={() => setAnchorEl(null)}
//                     >
//                         {conditionalLinks}
//                     </Menu>
//                 </Toolbar>
//             </AppBar>
//         </ThemeProvider>
//     </div>
//     )
// }

// export default Header;
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    ThemeProvider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    MenuItem,
    Menu,
    Button
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import theme from '../../theme/theme';

// --------------------------------------------------------- styles

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    // -------------------------------------------- states

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorLeftEl, setAnchorLeftEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isLeftMenuOpen = Boolean(anchorLeftEl);

    // -------------------------------------------- e.handlers for right side menu
    
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    
    // -------------------------------------------- e.handlers for the left side menu
    
    const handleHamburgerMenuOpen = (event) => {
        setAnchorLeftEl(event.currentTarget);
    };

    const handleHamburgerMenuClose = () => {
        setAnchorLeftEl(null);
    } 
    
    // -------------------------------------------- e.handler for the mobile menu right side
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    
    const handleMobileMenuOpen = (event) => {
        console.log(event.currentTarget, 'q123412341234')
        setMobileMoreAnchorEl(event.currentTarget);
    };
    
    // --------------------------------------------- [logged out] right side menu popup desktop

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><Link onClick={handleMenuClose} className="nav-link" to='/profile'>Account</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link onClick={handleMenuClose} className="nav-link" to='/auth/login'>Log In</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link onClick={handleMenuClose} className="nav-link" to="/auth/signup">Sign Up</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><span className="nav-link" onClick={e => props.handleAuth(null)}>logout</span></MenuItem>
        </Menu>
    );

    // --------------------------------------------- [logged out] left side menu popup desktop
    const menuLeftId = 'left-side-menu';
    const renderMenuLeft = (
        <Menu
            anchorEl={anchorLeftEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id={menuLeftId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isLeftMenuOpen}
            onClose={handleHamburgerMenuClose}
        >
            <MenuItem onClick={handleHamburgerMenuClose}><Link onClick={handleHamburgerMenuClose} className="nav-link" to='/'>Home</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link onClick={handleHamburgerMenuClose} className="nav-link" to='/dinnerplans'>Start Dine</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link onClick={handleHamburgerMenuClose} className="nav-link" to='/about'>RESTaurateurs!</Link></MenuItem>
        </Menu>
    );
    // --------------------------------------------- [logged out] right side menu functions mobile
    
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

        </Menu>
    );
    
    // ternary according to logged in/out
    
    let conditionalLinks = props.currentUser ?
        <div>
            <p>use logged in</p>
        </div>
    :
        <div>
            <p>not logged in</p>
        </div>

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <div className={classes.grow}>
                    <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="show links"
                        aria-controls={menuLeftId}
                        aira-haspopup="true"
                        onClick={handleHamburgerMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                    </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenuLeft}
                    {renderMenu}
                </div>
            </ThemeProvider>
        </div>
    );
}
export default Header;