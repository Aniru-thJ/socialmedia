import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const Stories = () => {

    const { currentUser } = useContext(AuthContext);
    // temp data
    const stories = [
       
        {
            id: 2,
            name: "_the_kungfu_panda",
            img: "https://images.pexels.com/photos/31600895/pexels-photo-31600895/free-photo-of-adorable-giant-panda-chewing-bamboo-close-up.jpeg?auto=compress&cs=tinysrgb&w=600",
          },{
            id: 3,
            name: "_the_kungfu_panda",
            img: "https://images.pexels.com/photos/31600895/pexels-photo-31600895/free-photo-of-adorable-giant-panda-chewing-bamboo-close-up.jpeg?auto=compress&cs=tinysrgb&w=600",
          },{
            id: 4,
            name: "_the_kungfu_panda",
            img: "https://images.pexels.com/photos/31600895/pexels-photo-31600895/free-photo-of-adorable-giant-panda-chewing-bamboo-close-up.jpeg?auto=compress&cs=tinysrgb&w=600",
          },{
            id: 5,
            name: "_the_kungfu_panda",
            img: "https://images.pexels.com/photos/31600895/pexels-photo-31600895/free-photo-of-adorable-giant-panda-chewing-bamboo-close-up.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          
      ];
  return (
    <div className="stories">
            <div className="story">
                <img src={currentUser.img} alt="story"></img>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="story"></img>
                <span>{story.name}</span>
            </div>
        ))

        }
    </div>
  )
}
