import { Link , useLocation} from "react-router";


export function Navbar(){

    const Location = useLocation();
    console.log("Location.pathname = ",Location.pathname);

    const token = localStorage.getItem("token");
    console.log("navbar token = ",token)

    return (
        <>
            <div
                className="header-demo"
                style={{
                backgroundColor: "#f3f4f6",      
                fontWeight: 600,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                }}
            >
                <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900"> BLOGIFY </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className={`cursor-pointer font-medium ${Location.pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                            Home
                        </Link>

                        <Link to="/Sports"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Sports" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Sports
                        </Link>

                        <Link to="/Travel"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Travel" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Travel
                        </Link>

                        <Link to="/Education"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Education" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Education
                        </Link>
                        {token && 
                        <Link to="/AddBlog"
                            className={`cursor-pointer font-medium ${Location.pathname === "/AddBlog" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            AddBlog
                        </Link>}
                    </nav>

                    <div className="flex items-center space-x-4">
                    {token ? (
                        <>
                        <Link to="/UserProfile" >
                            <div className="relative">
                                <button
                                    id="profile-button"
                                    className="relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all hover:ring-2 hover:ring-indigo-300 hover:scale-105 transform duration-200"
                                    title="Go to Your Profile"
                                >
                                    {" "}
                                    <span className="sr-only">Go to profile</span>{" "}
                                    <img
                                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="User profile"
                                    />{" "}
                                </button>
                            </div>
                        </Link>
                            <Link
                                className={`cursor-pointer font-medium text-grey-700 hover:text-red-500 }`} 
                                onClick={()=>{
                                    localStorage.removeItem("token");
                                    alert("Logout Successfull");
                                }}
                                to="/"
                                >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/Signup"
                                className={`cursor-pointer font-medium ${Location.pathname === "/Signup" ? "text-green-600" : "text-gray-700 hover:text-green-600" }`}
                                >
                                Signup
                            </Link>

                            <Link 
                                to="/Login"
                                className={`cursor-pointer font-medium ${Location.pathname === "/Login" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                                >
                                Login
                            </Link>
                        </>
                    ) }  
                    </div>  

                    </div>
                </div>
                </header>
            </div>
        </>
    )
}