import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/RouterProviders.jsx';
import AuthProviders from './providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='container mx-auto'>
<AuthProviders>
<React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
</AuthProviders>
</div>,
)
