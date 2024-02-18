import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { Header } from "./Headers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />
    }
    ,{
        path: 'products',
        element: <ProductsPage />
    }
])

export function Routes(){
    return <RouterProvider router={router}/>
}