import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <RouterProvider router = {router}/>
    </ChakraProvider>
)
