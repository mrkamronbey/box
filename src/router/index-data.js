import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"))
const About =lazy(()=>import("../pages/about/index"))
const Catalog=lazy(()=>import("../pages/catalog/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/about",
        component : <About/>
    },
    {
        id : 3,
        path : "/catalog",
        component : <Catalog/>
    },
]