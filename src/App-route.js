import Home from "./components/Home/index";
import User from "./components/User/index";
//
const routes = [
    {
        key: "route-home",
        name: "home",
        path: "/",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: Home,
    },
    {
        key: "route-about",
        name: "user",
        path: "/user",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: User,
    },
];

export default routes;
