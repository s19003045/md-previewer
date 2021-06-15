import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const MobileBody = ({ component: Component, authorize }) => {
    /** 可以設定 RWD: mobile 整體樣式 */
    return (
        <Box>
            <Container>
                <h4>Mobile Body</h4>
                <Component />
            </Container>
        </Box>
    );
};

export default MobileBody;
