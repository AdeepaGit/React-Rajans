
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import Contact from "./componants/ContactUs";
import About from "./componants/AboutUs";
import Event from "./componants/Events";
import Login from "./componants/Login";
import Register from "./componants/Register";
import MembersPanel from "./componants/MembersPanel";
import ResetPass from "./componants/ResetPass";
import AdminPanal from "./componants/AdminPanal";
import AdminHome from "./componants/AdminHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./componants/NavApp";


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Event />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="MembersPanel" element={isLoggedIn=="true" ? <MembersPanel /> : <Login/>} />
          <Route path="ResetPass" element={<ResetPass />} />
          <Route path="AdminPanal" element={<AdminPanal />} />
          <Route path="AdminHome" element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
