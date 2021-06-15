import React from "react";
import Grid from "@material-ui/core/Grid";
// mui-lab
import Alert from "@material-ui/lab/Alert";
// style
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

const NotAuth = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8} lg={8}>
                <div className={useStyles.root}>
                    <Alert severity="warning" className={useStyles.root}>
                        You are not authorized to this page.
                    </Alert>
                </div>
            </Grid>
        </Grid>
    );
};

export default NotAuth;
