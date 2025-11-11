import { useNavigate, useParams } from "react-router";
import { MainLayout } from "../Layouts/mainLayout.jsx"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export function UPEditBlog(){

  const navigate = useNavigate();
  const {blogId} = useParams();
  const [SingleBlog , setSingleBlog] = useState();
  const [category, setCategory] = useState("");
    const imgurlRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();


  const token = localStorage.getItem("token");
  console.log("EditBlog token = ", token);
  console.log("Edit blogId = ",blogId);
  console.log("singleBlog = ",SingleBlog);
  console.log("category = ",category);



  useEffect(() => {
    if (!token) {
      alert("Log in to EditBlog of your Choice!!!!");
      navigate("/");
    } else {
        axios({
            method : "GET",
            url : "http://localhost:4500/blog/singleBlog",
            params : {
                blogId
            },
            headers : {
                Authorization : token
            }
        })
        .then((response)=>{
            console.log("singleBlog from backend = ",response.data[0]);
            setSingleBlog(response.data[0]);
            setCategory(response.data[0].category);
        })
    }
  }, []);

  const editBlog = ()=>{
    axios({
        method : "PATCH",
        url : "http://localhost:4500/blog",
        data : {
            blogId,
            imgurl : imgurlRef.current.value,
            title : titleRef.current.value,
            description : descriptionRef.current.value,
            category
        },
        headers : {
            Authorization : token
        }
    })
    .then((response)=>{
        console.log(response.data);
        toast(response.data);
        navigate("/UserProfile/MyBlogs");
    })
    .catch((error)=>{
        console.log(error);
    })
  }

    



    return (
        <>
                 <MainLayout>
                   <section
                     id="form1"
                     className="min-h-full flex items-center justify-center bg-white p-8"
                   >
                     <div className="max-w-2xl w-full">
                       <div className="mb-8">
                         <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Edit your Blog Post
                         </h2>
                       </div>
                       <div  className="space-y-6">
                         <div>
                           <label
                             htmlFor="classic-imgsrc"
                             className="block text-sm font-semibold text-gray-700 mb-2"
                           >
                             Image URL
                           </label>{" "}
                           <input
                             type="url"
                             id="classic-imgsrc"
                             name="imgsrc"
                             required
                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                             placeholder="https://example.com/image.jpg"
                             defaultValue={SingleBlog?.imgurl}
                             ref={imgurlRef}
                           />
                         </div>
                         <div>
                           <label
                             htmlFor="classic-title"
                             className="block text-sm font-semibold text-gray-700 mb-2"
                           >
                             Title
                           </label>{" "}
                           <input
                             type="text"
                             id="classic-title"
                             name="title"
                             required
                             maxLength="50"
                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                             placeholder="Enter blog title"
                             defaultValue={SingleBlog?.title}
                             ref={titleRef}
                           />
                         </div>
                         <div>
                           <label
                             htmlFor="classic-description"
                             className="block text-sm font-semibold text-gray-700 mb-2"
                           >
                             Description
                           </label>{" "}
                           <textarea
                             id="classic-description"
                             name="description"
                             required
                             maxLength="500"
                             rows="4"
                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                             placeholder="Write your blog description..."
                             defaultValue={SingleBlog?.description}
                             ref={descriptionRef}
                           ></textarea>
                         </div>
                         <div>
                           <label
                             htmlFor="classic-category"
                             className="block text-sm font-semibold text-gray-700 mb-2"
                           >
                             Category
                           </label>{" "}
                           <select
                             id="classic-category"
                             name="category"
                             required
                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                             value={category}
                             onChange={(e) => setCategory(e.target.value)}
                           >
                             {" "}
                             <option value="">Select a category</option>{" "}
                             <option value="Sports">Sports</option>{" "}
                             <option value="Travel">Travel</option>{" "}
                             <option value="Education">Education</option>{" "}
                           </select>
                         </div>
                         <button
                           onClick={()=>{
                               editBlog()
                           }}
                           type="submit"
                           className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors"
                         >
                           {" "}
                           Edit Confirm{" "}
                         </button>
                       </div>
                       <div
                         id="classic-success"
                         className="hidden mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                       >
                         <p className="text-green-800 font-medium">
                           Blog post created successfully!
                         </p>
                       </div>
                       <div
                         id="classic-error"
                         className="hidden mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                       >
                         <p className="text-red-800 font-medium">
                           Error creating blog post. Please try again.
                         </p>
                       </div>
                     </div>
                   </section>
                 </MainLayout> 
        </>
    )
}