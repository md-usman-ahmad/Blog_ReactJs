import { use, useEffect, useRef, useState } from "react";
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
    const commentRef = useRef();
    const [blogComments , setblogComments] = useState([]);

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

            // Favourite API call 
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

            // Like API call 
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

            // Comment API call 
            axios({
                method : "GET",
                url : "http://localhost:4500/comment",
                params : {
                    blogId : blog.blogId
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response) =>{
                console.log("Fetching all Comments of this Particular Blog = ",response.data);
                setblogComments(response.data);
            })
        })
    },[])

    const favourite = ()=>{
        if(token){
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
                    toast.success(response.data)
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
                    toast.success(response.data)
                })
            }
            setIsFav(!IsFav);
        } else {
            toast("You have to login first")
        }
    }

    const like = ()=>{
        if(token){  
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
                    toast.success(response.data);
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
                    toast.success(response.data)
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
        } else {
            toast("Login before Liking any Blog")
        }
    }

    const comment = ()=> {
        if(token){
            axios({
                method : "POST",
                url : "http://localhost:4500/comment",
                data : {
                    userComment : commentRef.current.value,
                    blogId : DetailBlogPage.blogId,
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                toast.success(response.data)
                console.log("response.data = ",response.data);             
            })
            .catch((error)=>{
                console.log("Error = ",error);
            })
            commentRef.current.value = "";
        } else {
            toast("you have to Login first to comment anything");
        }
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

              {/* Favourite Section  */}
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

              {/* Like Section  */}
              <div className=" flex justify-center  items-center gap-2 mt-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider ">{totalLikes}</span>{" "}
                <svg onClick={()=>{like()}} xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" viewBox="0 0 24 24" 
                    fill={IsLiked ? "blue" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-thumbs-up-icon lucide-thumbs-up">
                    <path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
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

            {/* Comments Section(Write) */}    
            <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 id="v1-title" className="text-2xl font-semibold mb-4">Comment ({blogComments.length})</h2>
                <div id="form-1" className="mb-12">
                    <textarea 
                        ref = {commentRef}
                        id="input-1" 
                        placeholder="Add a comment..." 
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32"></textarea>
                <div className="mt-4 flex justify-end">
                    <button 
                        onClick={()=>{comment()}}
                        type="submit" 
                        id="btn-1" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"> Post Comment
                    </button>
                </div>
                </div>
                <div id="comments-1" className="space-y-8"></div>

                {/* (READ) */}
                <div className="space-y-10">
                {blogComments.map((item)=>{
                    return (
                    <div  className="group">
                    <div className="flex gap-4">
                        <img src={item.imageurl} alt="" className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                        <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-bold text-slate-900">{item.firstname}</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">{item.commentDate}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-3">{item.content}</p>
                        </div>
                    </div>
                    </div> 
                    )
                })}
      
            </div>
            </div>
          </div>
        </div>

        
        </MainLayout>
        </>
    )
}