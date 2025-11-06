import { Navbar } from "./navbar.jsx"

export function MainLayout({children}){
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}