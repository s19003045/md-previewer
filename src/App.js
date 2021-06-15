import React from "react";
import "./style/App.css";
// store
import StoreProvider from "./store/StoreProvider";
// component
import AuthLayer from "./authLayer";
import DataLayer from "./dataLayer";
// route
import RouterLayer from "./routerLayer";

function App() {
    return (
        <StoreProvider>
            {/* AuthLayer: 定義 authentication, 通過 authentication 才會 render children */}
            <AuthLayer>
                {/* DataLayer: 要 fetch API(e.g. 網站基本設定) 並儲存至 store, 可在此定義 */}
                <DataLayer />
                {/* RouterLayer: 路由設定 */}
                <RouterLayer />
            </AuthLayer>
        </StoreProvider>
    );
}

export default App;
