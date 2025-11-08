import { useEffect } from "react";
import { MainLayout } from "./mainLayout";
import { useNavigate } from "react-router";

export function AddBlog(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log("AddBlog token = ",token);

    useEffect( ()=>{
        if(!token){
            alert("Log in to AddBlog of your Choice!!!!");
            navigate("/");
        }
    },[])


    return (
        <>  
        <MainLayout>
            AddBlog
        </MainLayout>
        </>
    )
}