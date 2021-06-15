import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const DesktopBody = ({ component: Component, authorize }) => {
    /** 可以設定 RWD: desktop 整體樣式 */
    return (
        <Box>
            <Container>
                <h4>Desktop Body</h4>
                <Component />
            </Container>
        </Box>
    );
};

export default DesktopBody;
