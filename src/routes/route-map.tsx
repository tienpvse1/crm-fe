import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signup";


export const route: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpPage />
    },
    {
        path: "/",
        element: <HomePage />
    }

]