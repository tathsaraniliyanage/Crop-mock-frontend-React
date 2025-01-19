import { Outlet } from "react-router-dom";
import Headers from "../components/Header";
import { SideNavigationBar } from "../components/SideNavigationBar";
import "./Dashbord.css";
export function Dashboard() {
  return (
    <section className="flex flex-col w-dvw h-dvh">
      <Headers />
      <section className="flex flex-row h-full ">
        <div className="flex w-fit relative h-[100%]">
          <SideNavigationBar></SideNavigationBar>
        </div>
        <div className="flex flex-1 h-[100%] bg-gray-200">
          <Outlet></Outlet>
        </div>
      </section>
    </section>
  );
}
