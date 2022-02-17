import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
    let isAuth = false;
    if (1 + 1 === 2) isAuth = true;
    return isAuth;
}

const ProtectedRoute = () => {
    return (
        isAuth() ? <Outlet /> : <Navigate to='/' />
    );
}

export default ProtectedRoute;