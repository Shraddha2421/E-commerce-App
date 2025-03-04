import { lazy,Suspense } from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const SearchLazy = lazy(() => import('../pages/search/Search'));
const ShopLazy = lazy(() => import('../pages/shop/ShopPage'));
const SingleProductLazy = lazy(() => import('../pages/shop/productDetails/SingleProduct'));
const ErrorLazy = lazy(() => import('../pages/error/Error'));
const AboutLazy = lazy(() => import('../pages/about/About'));
const LoadingSpinner = lazy(() => import('../components/LoadingSpinner'));




const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <Suspense fallback={<LoadingSpinner/>}><ErrorLazy/></Suspense>,
        children: [
            {
                path:"/",
                element:<Home/>
            },

            {
                path:"/search",
                element: <Suspense fallback={<LoadingSpinner/>}><SearchLazy/></Suspense>
            },
            {
                path:"/shop",
                element: <Suspense fallback={<LoadingSpinner/>}><ShopLazy/></Suspense>
            },
            {
                path:"/shop/:id",
                element: <Suspense fallback={<LoadingSpinner/>}><SingleProductLazy/></Suspense>
            },
            {
                path:"/about",
                element: <Suspense fallback={<LoadingSpinner/>}><AboutLazy/></Suspense>
            }



        ]
    }
])
export default router;