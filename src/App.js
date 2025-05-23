
// import './App.css';
import './style.scss';
// import { Leftbar } from './components/leftbar/Leftbar';
import { Leftbar } from './components/leftbar/Leftbar';
import { Navbar } from './components/navbar/Navbar';
import { Rightbar } from './components/rightbat/Rightbar';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { Register } from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  // const {currentUser} = useContext(AuthContext);
  
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

function App() {
  const {currentUser} = useContext(AuthContext);
  // const { darkMode } = useContext(DarkModeContext);
  
  // Change this based on your auth logic

  // const Layout = () => {
  //   return (
  //     <div className={`theme-${darkMode ? "dark" : "light"}`}>
  //       <Navbar />
  //       <div style={{ display: 'flex' }}>
  //         <LeftBar />
  //         <div style={{ flex: 6 }}>
  //           <Outlet /> {/* This is where your page content will be rendered */}
  //         </div>
  //         <RightBar />
  //       </div>
  //     </div>
  //   )
  // }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;

