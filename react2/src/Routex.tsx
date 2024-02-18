import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import App from "./App";
import { ProductPage } from "./ProductPage";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { Suspense, lazy } from "react";
import { ContactPage } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";

// lazy pages powinny być umieszczone na końcu importów
const AdminPage = lazy(() => import('./AdminPage'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductPage/>
            },
            {
                path: 'contact',
                element: <ContactPage/>
            },
            {
                path: '/thank-you/:name',
                element: <ThankYouPage/>
            },
            {
                path: 'admin',
                element: (
                    <Suspense fallback={
                        <div>Loading...</div>
                    }
                    >
                        <AdminPage/>
                    </Suspense>
                )
            }
        ]
    }
])

export function Routes(){
    return <RouterProvider router={router}/>
}