import { SideBar } from "./sideBar";

export function UserProfileLayout({children}){
    return (
        <>
            <div className="flex" >
                <SideBar></SideBar>  
                <div className="flex justify-center mt-5 flex-1">
                    {children}
                </div> 
            </div>
        </>
    )
}