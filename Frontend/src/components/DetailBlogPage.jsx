import { use, useEffect, useState } from "react";
import { MainLayout } from "./Layouts/mainLayout";
import axios from "axios";
import { useParams } from "react-router";
import toast from "react-hot-toast";

export function DetailBlogPage(){
    const {categoryName , blogId} = useParams();

    const [DetailBlogPage , setDetailBlogPage] = useState();
    console.log("DetailBlogPage = ",DetailBlogPage)

    const [IsFav , setIsFav] = useState(false);
    const [IsLiked , setIsLiked] = useState(false);
    const [totalLikes , settotalLikes] = useState();

    const token = localStorage.getItem("token");
    useEffect(()=>{
        axios({
            method : "GET",
            url : "http://localhost:4500/getCategoryBlogs/singleBlog",
            params : {
                categoryName , blogId
            }
        })
        .then((response)=>{
            const blog = response.data[0];
            setDetailBlogPage(blog);    
            axios({
                method : "GET",
                url : "http://localhost:4500/Favourite",
                params : {
                    blogId : blog.blogId
                },
                headers : {
                    Authorization : token
                }  
            })
            .then((response)=>{
                setIsFav(response.data);    
            })
            axios({
                method : "GET",
                url : "http://localhost:4500/like",
                params : {
                    blogId : blog.blogId
                },
                headers : {
                    Authorization : token
                }  
            })
            .then((response)=>{
                settotalLikes(response.data.totalLikes);
                setIsLiked(response.data.IsLiked);    
            })
        })
    },[])

    const favourite = ()=>{
        if(!IsFav){
            axios({
                method : "POST",
                url : "http://localhost:4500/Favourite",
                data : {
                    blogId : DetailBlogPage.blogId,
                    title : DetailBlogPage.title
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                toast(response.data)
            })
        } else {
            axios({
                method : "DELETE",
                url : "http://localhost:4500/Favourite",
                data : {
                    blogId : DetailBlogPage.blogId,
                    title : DetailBlogPage.title
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                toast(response.data)
            })
        }
        setIsFav(!IsFav);
    }


    

    const like = ()=>{
        if(!IsLiked){
            axios({
                method : "POST",
                url : "http://localhost:4500/like",
                data : {
                    blogId : DetailBlogPage.blogId,
                    title : DetailBlogPage.title
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                toast(response.data);
                axios({
                    method : "GET",
                    url : "http://localhost:4500/like",
                    params : {
                        blogId : DetailBlogPage.blogId
                    },
                    headers : {
                        Authorization : token
                    }  
                })
                .then((response)=>{
                    settotalLikes(response.data.totalLikes);
                    setIsLiked(response.data.IsLiked);    
                })
            })
        } else {
            axios({
                method : "DELETE",
                url : "http://localhost:4500/like",
                data : {
                    blogId : DetailBlogPage.blogId,
                    title : DetailBlogPage.title
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                toast(response.data)
                axios({
                    method : "GET",
                    url : "http://localhost:4500/like",
                    params : {
                        blogId : DetailBlogPage.blogId
                    },
                    headers : {
                        Authorization : token
                    }  
                })
                .then((response)=>{
                    settotalLikes(response.data.totalLikes);
                    setIsLiked(response.data.IsLiked);    
                })
            })
        }
        setIsLiked(!IsLiked);
    }

    return (
        <> 
        <MainLayout>
            <div id="variation-3" className="variation  zen-layout">
          <div className="max-w-4xl mx-auto py-2">
            <div className="product-image h-52 mb-8 mx-auto max-w-lg rounded-lg overflow-hidden">
              <img src={DetailBlogPage?.imgurl} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="text-center mb-12">
              <span id="zen-price" className="text-5xl font-thin text-gray-800 me-3">
                {DetailBlogPage?.title}

              </span>
              <div className=" flex justify-center  items-center gap-2 mt-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider ">{DetailBlogPage?.category}</span>{" "}
                <svg onClick={()=>{favourite()}} xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill={IsFav ? "red" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-heart">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div className=" flex justify-center  items-center gap-2 mt-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider ">{totalLikes}</span>{" "}
                <svg onClick={()=>{like()}} xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill={IsLiked ? "blue" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-like"   
                    aria-hidden="true">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-1 7H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5l1 4 4-8h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3z"/>
                </svg>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center mb-5">
              <p
                id="zen-description"
                className="text-lg font-light text-gray-600 leading-relaxed"
              >
                {DetailBlogPage?.description}
              </p>
            </div>
          </div>
        </div>
        </MainLayout>
        </>
    )
}