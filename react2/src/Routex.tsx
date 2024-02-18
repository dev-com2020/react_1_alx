import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import App from "./App";
import { ProductPage } from "./ProductPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductPage/>
            }
        ]
    }
])

export function Routes(){
    return <RouterProvider router={router}/>
}