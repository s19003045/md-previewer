import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const MobileHeader = ({ authorize }) => {
    /** 可以設定 RWD: mobile 整體樣式 */
    return (
        <Box bgcolor="primary.main" color="white">
            <Container>
                <Grid container>
                    <h1>Mobile Header</h1>
                </Grid>
            </Container>
        </Box>
    );
};

export default MobileHeader;
