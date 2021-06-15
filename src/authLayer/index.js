import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
// component
import Layout from "../layout";
import NotAuth from "../components/auth/NotAuth";

const AuthLayer = (props) => {
    // store
    const [state, dispatch] = useContext(StoreContext);
    // local state
    const [authorize, setAuthorize] = useState(true);

    /** 定義 authentication 方法: e.g. LINE authentication */

    return (
        (authorize && props.children) || (
            <Layout component={NotAuth} authorize={authorize} />
        )
    );
};

export default AuthLayer;
