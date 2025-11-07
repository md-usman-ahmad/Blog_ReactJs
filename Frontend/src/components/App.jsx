import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { PageNotFound } from "./PageNotFound.jsx";
import { HomePage } from "./HomePage.jsx";
import { categoryName } from "./categoryName.jsx";
import { SignupPage } from "./SignupPage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import { UserProfile } from "./UserProfile.jsx";
import { UPFavourites } from "./UPFavourites.jsx";
import { UPZeroBlogs } from "./UPZeroBlogs.jsx";

const routes = createBrowserRouter([
    {
        path : "/",
        Component : HomePage,
        errorElement : <PageNotFound></PageNotFound>
    },
    {
        path : "/:categoryName",
        Component : categoryName,
    },
    {
        path : "/Signup",
        Component : SignupPage
    },
    {
        path : "/Login",
        Component : LoginPage
    },
    {
        path : "/UserProfile",
        Component : UserProfile
    },
    {
        path : "/UserProfile/favourites",
        Component : UPFavourites
    },
    {
        path : "/UserProfile/MyBlogs",
        Component : UPZeroBlogs
    }
])


export function App(){
    return (
        <>
            <RouterProvider router={routes} ></RouterProvider>
        </>
    )
}