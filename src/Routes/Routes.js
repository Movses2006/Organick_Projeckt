import { useRoutes } from "react-router";
import About from "../Pages/About/About";
import HomePage from "../Pages/Home/HomePage";
import ContactUs from "../Pages/OtherPages/ContactUs/ContactUs";
import ErrorPage from "../Pages/OtherPages/Error/ErrorPage";
import Licenses from "../Pages/OtherPages/Licenses/Licenses";
import News from "../Pages/OtherPages/News/News";
import Portfelio from "../Pages/OtherPages/Portfelio/Portfelio";
import Service from "../Pages/OtherPages/Service/Service";
import ServiceSingle from "../Pages/OtherPages/ServiceSingle/ServiceSingle";
import Team from "../Pages/OtherPages/Team/Team";
import Shop from "../Pages/Shop/Shop";

export const routes =  [ 
    {
      path: "/",
      element: <HomePage />,
    },
    {
        path: "/shop", 
        element: <Shop/>
    },
    {
      path: "/about",
      element: <About />,
    },
    {
        path: "/projects",
        element: <Portfelio />,
    },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
    {
        path: "/licenses",
        element: <Licenses />,
    },
    {
        path: "/service",
        element: <Service/>,
    },
    {
        path: "/service&single",
        element: <ServiceSingle/>,
    },
    {
        path: "/team",
        element: <Team/>,
    },
    {
       path: "/news",
       element: <News/>
    },
    {
      path: "*",
      element: <ErrorPage/>,
    }
]
const Route = () => {
    return <>
    {useRoutes(routes)}
    </>
}

export default Route;