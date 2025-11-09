import { Link } from "react-router";

export function SideBar(){
    console.log("My Profile");
    return (
        <>
            <aside id="default-sidebar" className="left-0 z-40 w-64 h-[calc(100vh-70px)] transition-transform -translate-x-full sm:translate-x-0 border-r" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white">
      <ul className="space-y-2 font-medium">
        <Link to="/UserProfile">
         <li>
            <div  className="cursor-pointer flex items-center p-2 text-stone-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">My Profile</span>
            </div>
         </li>
         </Link>
         
         <Link to="/UserProfile/MyBlogs">
         <li>
            <div  className="cursor-pointer flex items-center p-2 text-stone-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
               {/* <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg> */}
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="6" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <rect x="3" y="7" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.0" opacity="0.6"/>
                <rect x="9" y="1" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.0" opacity="0.6"/>
                <path d="M8 9h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                <path d="M8 12h7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                <path d="M8 15h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">My Blogs</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">xx</span>
            </div>
         </li>
         </Link>

         <Link to="/UserProfile/favourites">
         <li>
            <div  className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-6 h-6  text-red-500 transition duration-75 dark:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Favourite</span>
            </div>
         </li>
         </Link>
      </ul>
   </div>
</aside>
        </>
    )
}