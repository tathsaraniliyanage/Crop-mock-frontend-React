import { Link } from "react-router";
import "./Navigation.css";

export function SideNavigationBar() {
  // function dashboardCropOnclick() {
  //   alert("dashboardCropOnclick");
  // }
  return (
    <>
      <header >
        <nav className="navbar">
          <ul>
            {/* <button
              type="button"
              onClick={dashboardCropOnclick}
              className="font-semibold border-l-[4px] p-4 border-white h-[44px] flex flex-row gap-2 justify-start items-center text-[#0E836B] hover:bg-gradient-to-r from-[#0e836c1b] hover:border-[#0E836B]"
            >
              <img
                src="/src/assets/image/icon/icons8-plant-48.png"
                className="h-[18px]"
                alt=""
              />
              Crops
            </button> */}
            <Link to="/" className="custom-link">
              Home
            </Link>
            <Link to="/crop" className="custom-link">
              Crop
            </Link>
            <Link to="field" className="custom-link">
              Field
            </Link>
            <Link to="/equipment" className="custom-link">
              Equipment
            </Link>
            <Link to="/log" className="custom-link">
              Monitoring Log
            </Link>
            <Link to="/staff" className="custom-link">
              Staff
            </Link>
            <Link to="/user" className="custom-link">
              User
            </Link>
            <Link to="/vehicle" className="custom-link">
              Vehicle
            </Link>
          </ul>
        </nav>
      </header>
    </> 
  );
}
