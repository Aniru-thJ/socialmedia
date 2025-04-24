import "./navbar.scss";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SunnyIcon from '@mui/icons-material/Sunny';
import { useContext } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


export const Navbar = () => {
    const { toggle,darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="left">
            <Link to="./" style={{textDecoration:"none"}}>
            <span>Nanba & Nanbi</span>
            </Link>
            <HomeIcon/>
            {darkMode ? <SunnyIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
            <AppsOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search here!"></input>
            </div>
            </div>
            
        
        <div className="right">
            <Face2OutlinedIcon/>
            <MessageOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src={currentUser.img} alt="profile.img"></img>
                <span>{currentUser.name}</span>
            </div>
        </div>
        </div>
   
  );
}
