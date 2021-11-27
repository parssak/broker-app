import { getRoutes, getNavigation, getMedia } from "@/data/utils";

export const SITE_PATH = "broker-app";

const MASTER_ROUTES = [
    {
      path: "/",
      label: "home",
      component: () => import("@/views/home"),
      hidden: false,
    },
{
      path: "/about",
      label: "about",
      component: () => import("@/views/about"),
      hidden: false,
    },
{
      path: "/contact",
      label: "contact",
      component: () => import("@/views/contact"),
      hidden: false,
    },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);



