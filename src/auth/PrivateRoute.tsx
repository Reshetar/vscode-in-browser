import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router";
import Loading from "../components/common/loading/Loading";
import paths from "../routes/paths";

export default function PrivateRoute() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={paths.privatePage} />
}
