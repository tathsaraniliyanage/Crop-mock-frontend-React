import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import  Field  from "./pages/Field";
import Crop  from "./pages/Crop";
import Equipment  from "./pages/Equipment";
import Staff  from "./pages/Staff";
import Vehicle  from "./pages/Vehicle";
import Log from "./pages/Log";
import FieldAdd from "./components/FieldAdd";
import CropAdd from "./components/CropAdd";
import EquipmentAdd from "./components/EquipmentAdd";
import StaffAdd from "./components/StaffAdd";
import VehicleAdd from "./components/VehicleAdd";
import LogAdd from "./components/LogAdd";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

        <Route path="/dashboard" Component={Dashboard}>
        <Route path="home" Component={Home}></Route>
        <Route path="field" Component={Field}>
            <Route path="field-add" Component={FieldAdd}></Route>
        </Route>
        <Route path="crop" Component={Crop}>
            <Route path="crop-add" Component={CropAdd}></Route>
        </Route>
        <Route path="equipment" Component={Equipment}>
            <Route path="equipment-add" Component={EquipmentAdd}></Route>
        </Route>
        <Route path="staff" Component={Staff}>
            <Route path="staff-add" Component={StaffAdd}></Route>
        </Route> 
        <Route path="vehicle" Component={Vehicle}>
            <Route path="vehicle-add" Component={VehicleAdd}></Route>
        </Route> 
        <Route path="log" Component={Log}>
            <Route path="log-add" Component={LogAdd}></Route>
        </Route>   
        </Route>
    </Routes>
  );
}

export default App;
