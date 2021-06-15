import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import fetch from "./fetch";

const DataLayer = () => {
    // store
    const [state, dispatch] = useContext(StoreContext);
    // local state

    /** 定義要 fetch API 並儲存 data 至 store, 供 compoenent 使用  */
    useEffect(() => {
        // e.g. 取得 web style setting
        fetch
            .webStyleSetting()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return null;
};

export default DataLayer;
