import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/novaContextProvider";

export default function GuestLayout() {
    const { user, token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    
    return (
        <div>
            <Outlet />
        </div>
    );
}
