import APP from "../pages/index";

export default [
    {
        key: "Home",
        name: "Home",
        exact: true,
        path: "/",
        component: APP.Home,
        private: false,
    },
    {
        key: "Todo",
        name: "Todo",
        exact: true,
        path: "/todo",
        component: APP.Todo,
        private: false,
    },
    {
        key: "Album",
        name: "Album",
        exact: true,
        path: "/album",
        component: APP.Album,
        private: false,
    },

    { key: "ErrorPage", component: APP.Error },
];
