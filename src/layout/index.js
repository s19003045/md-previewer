import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const Layout = (props) => {
    /** layout: 可以 RWD, 調整 header, body, footer 的顯示 */

    return (
        <React.Fragment>
            {/* Header RWD*/}
            <Hidden xsDown>
                <Header.desktop {...props} />
            </Hidden>
            <Hidden smUp>
                <Header.mobile {...props} />
            </Hidden>

            {/* Body RWD */}
            <Hidden xsDown>
                <Body.desktop {...props} />
            </Hidden>
            <Hidden smUp>
                <Body.mobile {...props} />
            </Hidden>

            {/* Footer RWD */}
            <Hidden xsDown>
                <Footer.desktop {...props} />
            </Hidden>
            <Hidden smUp>
                <Footer.mobile {...props} />
            </Hidden>
        </React.Fragment>
    );
};

export default Layout;
