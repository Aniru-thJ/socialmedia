import "./section.scss";
import {AuthContext} from "../../context/authContext";
import { useContext } from "react";

export const Section = () => {

const {currentUser} = useContext(AuthContext);
    const comments = [
        {
          id: 1,
          desc: "This is a great post! I really enjoyed reading it.",
          name: "John Doe",
          userId: 1,
          profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        },
        {
            id: 2,
            desc: "This is a great post! I really enjoyed reading it.",
            name: "JJ",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
          },
        // You can add more comment objects here to generate more fake data
      ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.img} alt=""></img>
            <input type="text" placeholder="Write your comment!"></input>
            <button>Send</button>

        </div>
        {comments.map(coment=>(
            <div className="comment" key={coment.id}>
                <img src={coment.profilePicture} alt="" />
               <div className="info">
                    <span>{coment.name}</span>
                    <p>{coment.desc}</p>
                </div>
                    <span className="date">o sec ago</span>
            </div>
        ))}
            </div>

        );
}
