import { MainLayout } from "./mainLayout";
import { UserProfileLayout } from "./UserProfileLayout.jsx";
import { useState } from "react";   

export function UserProfile() {
  const [Gender, setGender] = useState();

  return (
    <>
      <MainLayout>
        <UserProfileLayout>
          <div className="form-container">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl bg-white p-10 shadow-sm border border-gray-100 rounded-2xl">
                <div className="text-center mb-10">
                  <div className="relative inline-block">
                    <img
                      className="h-20 w-20 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt="Profile"
                    />{" "}
                    <button className="absolute -bottom-1 -right-1 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mt-4">
                    Personal Information
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">
                        FirstName
                      </label>{" "}
                      <input
                        type="text"
                        className="w-full px-0 py-1 text-lg border-0 border-b border-gray-200 focus:outline-none focus:border-gray-800 transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Age
                      </label>{" "}
                      <input
                        type="text"
                        className="w-full px-0 py-1 text-lg border-0 border-b border-gray-200 focus:outline-none focus:border-gray-800 transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-3">Gender</label>
                        <div className="flex space-x-6">
                            <label className="flex items-center cursor-pointer">
                                <input onChange={(event)=>{setGender(event.target.value)}}  type="radio" name="gender" value="Male" className="mr-2 text-green-500"/>
                                <span className="text-gray-700">Male</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input onChange={(event)=>{setGender(event.target.value)}}  type="radio" name="gender" value="Female" className="mr-2 text-green-500"/>
                                <span className="text-gray-700">Female</span>
                            </label>
                        </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Email Address
                    </label>{" "}
                    <input
                      type="email"
                      className="w-full px-0 py-1 text-lg border-0 border-b border-gray-200 focus:outline-none focus:border-gray-800 transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-light py-4 px-12 rounded-full transition-colors tracking-wide"
                  >
                    Update Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </UserProfileLayout>
      </MainLayout>
    </>
  );
}
