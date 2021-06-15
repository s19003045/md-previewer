import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// mui-lab
import Alert from "@material-ui/lab/Alert";
// style
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

const NotFound = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8} lg={8}>
                <div className={useStyles.root}>
                    <Alert severity="warning" className={useStyles.root}>
                        The page is not found
                    </Alert>
                </div>
            </Grid>
        </Grid>
    );
};

export default NotFound;
