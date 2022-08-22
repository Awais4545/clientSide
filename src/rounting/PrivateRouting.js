import { Navigate, Outlet } from "react-router-dom";

const PrivateRounting = () => {
    const auth = localStorage.getItem("user")
    return auth ? <Outlet /> : <Navigate to="/login" />

}
export default PrivateRounting