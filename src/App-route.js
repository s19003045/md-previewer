import Home from "./components/Home/index";
import MdPreview from "./components/MdPreview";
import MdDemo from "./components/MdDemo";
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
        key: "route-MdPreview",
        name: "MdPreview",
        path: "/MdPreview",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: MdPreview,
    },
    {
        key: "route-MdDemo",
        name: "MdDemo",
        path: "/MdDemo",
        withHeader: true,
        withFooter: true,
        public: true, // 若在維護開發中請設定 false
        authority: null,
        component: MdDemo,
    },
];

export default routes;
