import { useNavigate, Link } from "react-router";
import { MainLayout } from "../Layouts/mainLayout.jsx";
import { UserProfileLayout } from "../Layouts/UserProfileLayout.jsx";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "../blogCard.jsx";
import toast from 'react-hot-toast';


export function UPBlogs() {
  
    const [myBlogs , setMyBlogs] = useState([]);
    
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("/UserProfile/myBlogs token = ", token);



  const myAllBlogs = ()=>{
    axios({
        method: "GET",
        url: "http://localhost:4500/blog",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          console.log("myBlogs = ",response.data);
          setMyBlogs(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
  }

  useEffect(() => {
    if (!token) {
      alert("Log in to see your Personal Blogs !!!!");
      navigate("/");
    } else {
      myAllBlogs();
    }
  }, []);


  const handleDeleteBlog = (blogId)=>{
    axios({
      method : "DELETE",
      url : `http://localhost:4500/blog?blogId=${blogId}`,  
      headers : {
        Authorization : localStorage.getItem("token")
      }
    })
    .then((response)=>{
      console.log(response.data);
      toast(response.data);
      myAllBlogs();
    })
    .catch((error)=>{
      console.log(error);
    })
  }



  return (
    <>
      <MainLayout>
        <UserProfileLayout>
            {myBlogs.length === 0 && 
          <section
            id="state2"
            className="min-h-full flex items-center justify-center bg-white p-8"
          >
            <div className="max-w-lg w-full text-center">
              <div className="flex justify-center mb-8">
                <SquarePen className="w-15 h-15 text-gray-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                No Blogs yet
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                You haven't published any blogs yet. Share your thoughts,
                stories, and expertise with your audience.
              </p>
              <Link to="/AddBlog">
                <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">
                  {" "}
                  Write Your First Post{" "}
                </button>
              </Link>
            </div>
          </section>}

          {myBlogs.map( (item)=>{
            return <BlogCard key={item.blogId} {...item} deleteBlog={handleDeleteBlog}></BlogCard>
          })}

        </UserProfileLayout>
      </MainLayout>
    </>
  );
}
