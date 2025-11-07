import { useParams } from "react-router";
import { MainLayout } from "./mainLayout";

export function categoryName(){
    const {categoryName} = useParams();
    console.log(categoryName);

    return (
        <>
        <MainLayout>
            {categoryName}
        </MainLayout>
        </>
    )
}