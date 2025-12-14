import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? <Outlet /> : <Navigate to="/register" replace />;
};
