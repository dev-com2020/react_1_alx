import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";

const router = createBrowserRouter([
    {
        path: 'products',
        element: <ProductsPage />
    }
])

export function Routes(){
    return <RouterProvider router={router}/>
}