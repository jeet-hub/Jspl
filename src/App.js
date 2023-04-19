import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Connectivity";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Overview from "./pages/Overview";
import Navbar from "./components/Navbar";
import Connectivity from "./pages/Connectivity";
import Lrf from "./pages/Lrf";
import Rh from "./pages/Rh";
import Digitaltwyn from "./pages/Digitaltwyn";
import SectionOverview from "./pages/SectionOverview";
import Historical from "./pages/Historical";
import Chemisty from "./pages/Chemisty";
import Eaf from "./pages/Eaf";
function App() {
  return (
    <Router>
      <Navbar/>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/connectivity" element={<Connectivity />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/settings/overview" element={<Overview/>} />
          <Route path="/settings/Digitaltwyn" element={<Digitaltwyn/>} />
          <Route path="/settings/sectionoverview" element={<SectionOverview/>} />
          <Route path="/settings/historical" element={<Historical/>} />
          <Route path="/settings/chemistryview" element={<Chemisty/>} />
          <Route path="/furnance/EAF" element={<Eaf/>} />
          <Route path="/lrf/lrf1" element={<Lrf/>} />
         





          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
