import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { PageNotFound } from "./PageNotFound.jsx";
import { HomePage } from "./HomePage.jsx";
import { categoryName } from "./categoryName.jsx";
import { SignupPage } from "./SignupPage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import { UserProfile } from "./UserProfile.jsx";
import { UPFavourites } from "./UPFavourites.jsx";
import { UPMyBlogs } from "./UPMyBlogs.jsx";
import { AddBlog } from "./AddBlog.jsx";
import { Toaster } from 'react-hot-toast';
import { UPEditBlog } from "./UPEditBlog.jsx";

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
        path : "/AddBlog",
        Component : AddBlog
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
        Component : UPMyBlogs
    },
    {
        path : "/UserProfile/EditBlog/:blogId",
        Component : UPEditBlog
    }
])


export function App(){
    return (
        <>
            <RouterProvider router={routes} ></RouterProvider>
            <Toaster />
        </>
    )
}