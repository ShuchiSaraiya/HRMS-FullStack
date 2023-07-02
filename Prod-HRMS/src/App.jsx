import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import LeaveComponent from "./Components/Leave/LeaveComponent";
import Calender from "./Components/Calender/Calender";
import JobCardComponent from "./Components/JobCard/JobCardComponent";
import Login from "./Components/Landing/Login";
import SignUp from "./Components/Landing/Signup";
import ProfileHeader from "./Components/Profile/profile_header";
import EditProfile from "./Components/EditProfile/Edit_Form";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Home />
                </div>
              </div>
            }
          />

          <Route
            path="Calender"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <Calender />
                </div>
              </div>
            }
          />

          <Route
            path="Jobcard"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <JobCardComponent />
                </div>
              </div>
            }
          />

          <Route
            path="Leave"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <LeaveComponent />
                </div>
              </div>
            }
          />

          <Route
            path="Profile"
            element={
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <ProfileHeader />
                </div>
              </div>
            }
          />

          <Route path="Edit" element={<EditProfile />} />
          <Route path="Resume" element={
            <div className="App">
            <div className="AppGlass">
              <Sidebar />
              <Resume />
            </div>
          </div>
          } />

          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
