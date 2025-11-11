import { Link, useParams } from "react-router";
import { MainLayout } from "./Layouts/mainLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { CategoryBlogCard } from "./categoryBlogCard";

export function categoryName(){
    const {categoryName} = useParams();
    console.log(categoryName);

    
    const [categoryBlogs, setCategoryBlogs] = useState([]);
    console.log("categoryBlogs: ", categoryBlogs);

    const token = localStorage.getItem("token");
    console.log("SPORTS token = ",token);

    useEffect( ()=>{
        axios({
            method : "GET",
            url : "http://localhost:4500/getCategoryBlogs",
            params : {
                categoryName
            }
        })
        .then((response)=>{
            console.log(response);
            setCategoryBlogs(response.data);
        })
    },[categoryName])

    return (
        <>
        <MainLayout>
           {categoryBlogs.length === 0 && <div
        id="page3"
        className="page flex-col justify-center items-center my-20"
      >
        <div className="text-center max-w-2xl mx-auto px-8">
          <h2 className="text-3xl font-light text-gray-700 mb-6">{categoryName} Blogs Not Found</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We couldn't find what you were looking for. Perhaps you can find
            what you need from our homepage.
          </p>
        </div>
      </div>}

           <div className="flex p-2">
            
                {categoryBlogs.map( (item)=>{
                    return <Link> <CategoryBlogCard  {...item}></CategoryBlogCard> </Link>
                })}
                
                           
            </div>
        </MainLayout>
        </>
    )
}