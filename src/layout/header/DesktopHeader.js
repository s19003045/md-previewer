import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const DesktopHeader = ({ authorize }) => {
    /** 可以設定 RWD: desktop 整體樣式 */
    return (
        <Box bgcolor="primary.main" color="white">
            <Container>
                <Grid container>
                    <h1>Desktop Header</h1>
                </Grid>
            </Container>
        </Box>
    );
};

export default DesktopHeader;
