import { useEffect, useRef } from "react";
import { MainLayout } from "./mainLayout";
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';
import axios from "axios";

export function AddBlog() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("AddBlog token = ", token);

  useEffect(() => {
    if (!token) {
      alert("Log in to AddBlog of your Choice!!!!");
      navigate("/");
    }
  }, []);

  const imgurlRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const publishBlog = ()=>{
        if(!token){
            alert("Log in to Publish Your Blogs !!!!");
            navigate("/");
        } else {
            axios({
                method : "POST",
                url : "http://localhost:4500/blog",
                data : {
                    imgurl : imgurlRef.current.value,
                    title : titleRef.current.value,
                    description : descriptionRef.current.value,
                    category : categoryRef.current.value
                },
                headers : {
                    Authorization : token,
                }
            })
            .then((response)=>{
                console.log("publish response = ",response.data);
                toast(response.data);
            })
            .catch((error)=>{
                console.log("Publish error = ", error);
            })
            
            imgurlRef.current.value = "";
            titleRef.current.value = "";
            descriptionRef.current.value = "";
            categoryRef.current.value = "";
        }
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
                Create New Blog Post
              </h2>
              <p className="text-gray-600">
                Fill in the details to publish your blog
              </p>
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
                  ref={categoryRef}
                >
                  {" "}
                  <option value="">Select a category</option>{" "}
                  <option value="Technology">Sports</option>{" "}
                  <option value="Travel">Travel</option>{" "}
                  <option value="Lifestyle">Education</option>{" "}
                </select>
              </div>
              <button
                onClick={()=>{
                    publishBlog()
                }}
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors"
              >
                {" "}
                Publish Blog Post{" "}
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
  );
}
