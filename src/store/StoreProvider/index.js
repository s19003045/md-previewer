import React, { useReducer, createContext } from "react";

import reducers from "./rootReducer";

// 建立一個 context component ，並匯出給子 component 使用
const StoreContext = createContext(undefined);

// 初始化
const initState = reducers();

// provider global store center
// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initState);
    // Important(!): memoize array value. Else all context consumers update on *every* render
    const store = React.useMemo(() => [state, dispatch], [state]);
    // 透過 context component.Provider 將 store 傳下去
    // eslint-disable-next-line react/jsx-filename-extension
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export { StoreContext };

export default StoreProvider;
