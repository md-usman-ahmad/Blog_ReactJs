import { Link, useNavigate } from "react-router";
import { MainLayout } from "../Layouts/mainLayout.jsx";
import { UserProfileLayout } from "../Layouts/UserProfileLayout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryBlogCard } from "../categoryBlogCard.jsx";

export function UPLiked() {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log("/UserProfile/liked token = ",token);

    const [LikedBlogs , setLikedBlogs] = useState([]);
    console.log("LikedBlogs = ",LikedBlogs);

    useEffect( ()=>{
        if(!token){
            alert("Log in to see your Liked Blogs !!!!");
            navigate("/");
        } else{
          axios({
            method : "GET",
            url : "http://localhost:4500/getLikedBlogs",
            headers : {
              Authorization : token
            }
          })
          .then((response)=>{
            console.log("Liked blogs = ",response);
            setLikedBlogs(response.data);
          })
        }
    },[])

  return (
    <>
      <MainLayout>
        <UserProfileLayout>
          {LikedBlogs.length === 0 &&
          <section
            id="state1"
            className="min-h-full flex items-center justify-center bg-white p-8"
          >
            <div className="max-w-md w-full text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                No Liked Articles
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                You haven't Liked any articles yet. Start Liking articles
                to See them later.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                {" "}
                Browse Articles{" "}
              </button>
            </div>
          </section> }

          {LikedBlogs.map( (item)=>{
            return <Link to={`/${item.category}/${item.blogId}`} key={item.blogId}> <CategoryBlogCard {...item}></CategoryBlogCard> </Link>
          })}
          
        </UserProfileLayout>
      </MainLayout>
    </>
  );
}
