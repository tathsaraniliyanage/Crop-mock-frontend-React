import {Outlet} from "react-router";
import {Navigation} from "./SideNavigationBar.tsx";


export const RootLayout = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
};