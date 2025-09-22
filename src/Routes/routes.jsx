import { createBrowserRouter } from 'react-router-dom';
import NavbarContainer from '../Components/NavbarBlock/NavbarContainer';
import Layout from '../layout/layout';
import Login from '../auth/Login';
import Home from '../auth/Home';
import Register from "../auth/Register"; 
import ResetPassword from '../auth/ResetPassword';
import ProfileContainer from '../Components/UserProfile/ProfileContainer';
import MyAccount from '../Components/UserProfile/MyAccount';
import AddProfile from '../Components/UserProfile/AddProfile';
import UploadProfilePhoto from '../Components/UserProfile/UploadProfilePhoto';
import ChangePassword from '../Components/UserProfile/ChangePassword';
import DeleteAccount from '../Components/UserProfile/DeleteAccount';
import AdminContainer from '../Admin/AdminContainer';
import CreateAlbum from '../Admin/Album/CreateAlbum';
import AlbumLandingContainer from '../Album_Landing/AlbumLandingContainer';
import PopularAlbums from '../Album_Landing/PopularAlbums';
import AlbumDetails from  '../Album_Landing/AlbumDetails'
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

let myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <AlbumLandingContainer/>,
                children: [
                    {
                        index:true,
                        element:<PopularAlbums/>
                    },
                    {
                        path:"album-details/:albumTitle",
                        element:<AlbumDetails/>
                    }
                ]
            },
            {
                path: '/auth/login',
                element:(
                    <PublicRoutes>
                        <Login/>
                    </PublicRoutes>
                ),
            },
            {
                path: '/auth/register',
                element: (
                    <PublicRoutes>
                        <Register/>
                    </PublicRoutes>
                ),
            },
            {
                path: "/auth/reset-password",
                element:(
                    <PublicRoutes>
                         <ResetPassword/>
                     </PublicRoutes>
                ),
            },
            {
                path:"/admin",
                element:<AdminContainer/>,
                children:[
                    {
                        path:"create-album",
                        element:<CreateAlbum/>,
                    },
                ],
            },    
            {
                path:"/user/profile",
                element:(
                    <PrivateRoutes>
                        <ProfileContainer/>
                    </PrivateRoutes>
                     ),
                children: [
                    {
                        index:true,
                        element:<MyAccount/>
                    },
                    {
                        path:"add-profile",
                        element:<AddProfile/>
                    },
                    {
                        path:"upload-profile-photo",
                        element:<UploadProfilePhoto/>
                    },
                    {
                        path:"change-password",
                        element:<ChangePassword/>
                    },
                    {
                        path:"delete-account",
                        element:<DeleteAccount/>
                    }
                ]
            },    
            {
                path: '*',
                element: <h1>404! Page not found</h1>,
            },
        ]
    },

])

export default myRoutes;