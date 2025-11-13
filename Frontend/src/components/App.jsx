import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { PageNotFound } from "./PageNotFound.jsx";
import { HomePage } from "./HomePage.jsx";
import { categoryName } from "./categoryName.jsx";
import { SignupPage } from "./Registration/SignupPage.jsx";
import { LoginPage } from "./Registration/LoginPage.jsx";
import { UserProfile } from "./UserProfile/UserProfile.jsx";
import { UPFavourites } from "./UserProfile/UPFavourites.jsx";
import { UPBlogs } from "./UserProfile/UPBlogs.jsx";
import { AddBlog } from "./AddBlog.jsx";
import { Toaster } from 'react-hot-toast';
import { UPEditBlog } from "./UserProfile/UPEditBlog.jsx";
import { DetailBlogPage } from "./DetailBlogPage.jsx";

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
        path : "/:categoryName/:blogId",
        Component : DetailBlogPage
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
        Component : UPBlogs
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