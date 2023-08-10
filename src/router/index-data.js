import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"));
const About = lazy(() => import("../pages/about/index"));
const Catalog = lazy(() => import("../pages/catalog/index"));
const ProductMore = lazy(() => import("../pages/product-more/index"));
const News = lazy(() => import("../pages/news/index"));
const NewsMore = lazy(() => import("../pages/news-more/index"));
const Contact = lazy(() => import("../pages/contact/index"));

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    path: "/catalog",
    component: <Catalog />,
  },
  {
    id: 4,
    path: "/productmore/:id",
    component: <ProductMore />,
  },
  {
    id: 5,
    path: "/news",
    component: <News />,
  },
  {
    id: 6,
    path: "/newsmore/:id",
    component: <NewsMore />,
  },
  {
    id: 7,
    path: "/contact",
    component: <Contact />,
  },
  
];
