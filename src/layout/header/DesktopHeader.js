import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom"
import { menus } from "../../App-header"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const DesktopHeader = ({ authorize }) => {
    const classes = useStyles();

    const handleClickMenu = (e) => {
        console.log()
    }

    /** 可以設定 RWD: desktop 整體樣式 */
    return (
        <Box bgcolor="primary.main" color="white">
            <Grid container>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton href={"/"} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <HomeIcon />
                            </IconButton>
                            {Array.isArray(menus.menuLeft) && menus.menuLeft.map(menu => (
                                <Box key={menu.id} mx={2}>
                                    <Button key={menu.id} size="small" variant="outlined" color="inherit" href={menu.path} onClick={(e) => handleClickMenu(e)}>
                                        <Box>
                                            <Typography key={menu.id} variant="h6" className={classes.title}>
                                                {menu.label}
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            ))}
                            {/*<Button color="inherit">Login</Button>*/}
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        </Box>
    );
};

export default DesktopHeader;
