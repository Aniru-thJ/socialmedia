import "./leftbar.scss";
import friends from "../../assets/1.png";
import groups from "../../assets/2.png";
import market from "../../assets/3.png";
import memory from "../../assets/5.png";
import event from "../../assets/6.png";
import gaming from "../../assets/7.png";
import gallery from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const Leftbar = () => {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
        <div className="container">
            <div className="menu">
                <h3>Menu</h3>
            <div className="user">
                <img src={currentUser.img} alt="profile.img"></img>
                <span>{currentUser.name}</span>
            </div>
            <div className="item">
                <img src={(friends)} alt=""></img>
                <span>Friends</span>
                </div>
                <div className="item">
                <img src={(groups)} alt=""></img>
                <span>Groups</span>
            </div>
            <div className="item">
                <img src={(market)} alt=""></img>
                <span>Marketplace</span>
            </div>
            <div className="item">
                <img src={(memory)} alt=""></img>
                <span>Memories</span>
            </div>
            </div>
            <div className="menu">
                <h3>Your Shortcuts</h3>
                <div className="item">
                <img src={(event)} alt=""></img>
                <span>Events</span>
            </div>
            <div className="item">
                <img src={(gaming)} alt=""></img>
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src={(gallery)} alt=""></img>
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src={(videos)} alt=""></img>
                <span>Videos</span>
            </div>
            <div className="item">
                <img src={(messages)} alt=""></img>
                <span>Messages</span>
            </div>
            <hr/>
            <div className="footer">
                <CopyrightOutlinedIcon/>
                <span>Aniruth Jawahar</span>
                <p></p>
                <span>2025</span>
            </div>

            </div>
            </div>
        </div>
  )
}
