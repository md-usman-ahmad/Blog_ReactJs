import { MainLayout } from "./Layouts/mainLayout.jsx";
import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Github} from "lucide-react"; // footer
import { useEffect, useState } from "react";
import axios from "axios";
import { HorizontalCard } from "./horizontalCard.jsx";


export function HomePage(){

    const token = localStorage.getItem("token");
    console.log("navbar token = ",token)
    const [RecentBlogs , setRecentBlogs] = useState([]);

    useEffect( ()=>{
        axios({
            method  : "GET",
            url : "http://localhost:4500/RecentBlogs",
        })
        .then((response)=>{
            console.log(response.data)
            setRecentBlogs(response.data);
        })

        
    },[])

    return (
        <>  
            <MainLayout>
            {!token && <div className=" flex items-center justify-center bg-white mt-30">
                <div className="text-center max-w-xl px-6">
                    <section>
                        <div className="mb-12">
                            <h1 className="text-6xl font-thin text-gray-800 mb-4">Think Simple</h1>
                            <div className="w-32 h-0.5 bg-green-500 mx-auto mb-8"></div>
                            <h2 className="text-2xl font-light text-gray-600 leading-relaxed">
                                A collection of thoughts on design, technology, and life. Written with intention and care
                            </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link to="/Login" 
                                className="group relative border-2 border-blue-500 text-blue-500 hover:text-white font-medium px-12 py-4 rounded-none transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">Login</span>
                                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                            <Link to="/Signup"  
                                className="group relative border-2 border-green-500 text-green-500 hover:text-white font-medium px-12 py-4 rounded-none transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Sign Up</span>
                                <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>}

                {/* Popular Blogs  */}
            <div className="w-1/2 mx-auto">
                <h3 className="text-3xl handwriting font-bold text-stone-800 my-6 mb-2">Popular Blogs </h3>
                {[].map( (item)=>{
                    return  <HorizontalCard key={item.blogId} {...item}></HorizontalCard>  
                    
                })}
          </div>
                {/* Recent Blogs  */}
            <div className="w-1/2 mx-auto">
                <h3 className="text-3xl handwriting font-bold text-stone-800 my-6 mb-2">Recent Blogs </h3>
                {RecentBlogs.map( (item)=>{
                    return  <HorizontalCard key={item.blogId} {...item}></HorizontalCard>  
                    
                })}
          </div>

                    {/* <!-- About Section --> */}
            <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl handwriting font-bold text-amber-800 mb-8">A little about me</h3>
                <p className="text-lg text-amber-700 leading-relaxed max-w-2xl mx-auto" id="about-text">I'm a writer who believes in the power of small moments and quiet observations. When I'm not writing, you'll find me tending to my garden, reading by the window, or exploring new coffee shops around the city.</p>
                <div className="mt-8 flex justify-center gap-6">
                <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                🌱
                </div>
                <p className="text-sm text-amber-600">Gardening</p>
                </div>
                <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                📖
                </div>
                <p className="text-sm text-amber-600">Reading</p>
                </div>
                <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                ☕
                </div>
                <p className="text-sm text-amber-600">Coffee</p>
                </div>
                </div>
            </div>
            </section>


                                {/* Footer Section  */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Logo/Brand */}
                    <div className="mb-6">
                    <h2 className="text-gray-900 mb-2">My Blog</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Exploring ideas, sharing stories, and connecting with readers around the world.
                    </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mb-6">
                    <ul className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                        <Link to="/Sports" className="text-gray-600 hover:text-gray-900 transition-colors">Sports</Link>
                        <Link to="/Travel" className="text-gray-600 hover:text-gray-900 transition-colors">Travel</Link>
                        <Link to="/Education" className="text-gray-600 hover:text-gray-900 transition-colors">Education</Link>
                        <Link to="/AddBlog" className="text-gray-600 hover:text-gray-900 transition-colors">AddBlog</Link>
                    </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-6">
                    <a href="https://www.linkedin.com/in/usman-ahmad-87aa5238a/" className="text-gray-400 hover:text-blue-700 transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://github.com/md-usman-ahmad" className="text-gray-400 hover:text-gray-900 transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                    &copy; 2024 My Blog. Crafted with passion and coffee.
                    </p>
                </div>
                </footer>



            </MainLayout>
        </>
    )
}