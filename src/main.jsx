import React from 'react';
import ReactDOM from 'react-dom/client'
import "./global.css"
import App from './App';
import { RouterProvider } from 'react-router-dom';
import myRoutes from './Routes/routes';
import AuthContextApi from './context/AuthContextApi';
import FetchUserContext from './context/FetchUserContext';
import AudioPlayerContext from './context/AudioPlayerContext';


ReactDOM.createRoot(document.getElementById('root')).render( 
    <>
    <AuthContextApi>
        <FetchUserContext>
         <AudioPlayerContext>
         <RouterProvider router={myRoutes}/>
         </AudioPlayerContext>
        </FetchUserContext>
    </AuthContextApi>
    </>
);