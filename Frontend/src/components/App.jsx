import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { PageNotFound } from "./PageNotFound.jsx";
import { HomePage } from "./HomePage.jsx";
import { Sports } from "./Sports.jsx";
import { Education } from "./Education.jsx";
import { Travel } from "./Travel.jsx";
import { SignupPage } from "./SignupPage.jsx";
import { LoginPage } from "./LoginPage.jsx";

const routes = createBrowserRouter([
    {
        path : "/",
        Component : HomePage,
        errorElement : <PageNotFound></PageNotFound>
    },
    {
        path : "/Sports",
        Component : Sports,
    },
    {
        path : "/Education",
        Component : Education,
    },
    {
        path : "/Travel",
        Component : Travel
    },
    {
        path : "/Signup",
        Component : SignupPage
    },
    {
        path : "/Login",
        Component : LoginPage
    }
])


export function App(){
    return (
        <>
            <RouterProvider router={routes} ></RouterProvider>
        </>
    )
}