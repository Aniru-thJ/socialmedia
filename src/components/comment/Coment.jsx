import "./comment.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { Section } from "../section/Section";
import { useState } from "react";

export const Coment = ({post}) => {

    const liked = false;
    const [commentOpen,setcommentOpen] = useState(false);
 
  return (
    <div className="comment">
        <div className="container">
        <div className="user" key={post.id}>
            <div className="userinfo">
            <img src={post.profilePic} alt=""></img>
            <div className="details">
            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none",color:"inherit"}}>
                <span className="name">{post.name}</span>
            </Link>
            <span className="date">{post.time}</span>
            </div>
            </div>
                <MoreHorizIcon/>
                </div>
                
            <div className="content">
                
                
                <div className="contents">
                <img src={post.image}></img><p>{post.desc}</p>
                
            </div>
            <div className="info">
                <div className="infos">
                    {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}12likes
                    </div>
                    <div className="infos" onClick={()=>setcommentOpen(!commentOpen)}>
                    <TextsmsOutlinedIcon/>1 comment
                    </div>
                    <div className="infos">
                    <ShareOutlinedIcon/>
                    </div>
            </div></div>
           {commentOpen && <Section/>}
        </div>
    </div>
  )
}
