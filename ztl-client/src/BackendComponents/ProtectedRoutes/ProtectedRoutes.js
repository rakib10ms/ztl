import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route,Outlet} from "react-router-dom";
import Swal from 'sweetalert2';
import UserLogin from '../Authentication/UserLogin';
function ProtectedRoutes() {
    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    console.log('local storage check', storageData)
    useEffect(() => {
      const storageDatas = localStorage.getItem('user_type');
      setstorageData(storageDatas)
    }, [])
  

   return  storageData!==null?<Outlet/>: <Navigate to ="/user-login"/>;
            
        

    
}

export default ProtectedRoutes;