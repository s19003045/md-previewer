import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const gridStyles = makeStyles({
    root: {},
});

const MobileFooter = ({ authorize }) => {
    // style
    const gridClasses = gridStyles;
    /** 可以設定 RWD: mobile 整體樣式 */

    return (
        <Box
            position="absolute"
            bottom="0px"
            m={0}
            p={0}
            width="100%"
            textAlign="center"
            color="#fff"
            bgcolor="text.disabled"
        >
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <h4>Mobile Footer</h4>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MobileFooter;
