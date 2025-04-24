import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Post } from "../../components/post/Post";

export const Profile = () => {
  return (
    <div className="profile">
        <div className="images">
            <img src="https://images.pexels.com/photos/31610407/pexels-photo-31610407/free-photo-of-modern-architectural-space-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="cover"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s" alt="" className="profileimage"></img>
            
        </div>
        <div className="profilecontainer">
            <div className="center">
                  
                  <button style={{backgroundColor:"blue"}}>Follow Mamame!</button>
                  <span>Priya Sharma</span>
                  <button style={{backgroundColor:"green"}}>Message</button>
                </div>
                
                <div className="left">
                <p>Other Links:</p>
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookTwoToneIcon fontSize="small" />
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="small" />
      </a>
      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon fontSize="small" />
      </a>
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="small" />
      </a>
      <a href="http://pinterest.com" target="_blank" rel="noopener noreferrer">
        <PinterestIcon fontSize="small" />
      </a>
                </div>
               
            </div>
            <Post/>
        </div>
  )
}
