import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Contenido from './components/Contenido.jsx';
import Calificaciones from './components/Calificaciones.jsx';
import Foro from './components/Foro.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Contenido/:infoRamo",
        element: <Contenido/>
    },
    {
        path: "Calificaciones/:infoRamo",
        element: <Calificaciones/>
    },
    {
        path: "Foro/:infoRamo",
        element: <Foro/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <RouterProvider router = {router}/>
    </ChakraProvider>
)
