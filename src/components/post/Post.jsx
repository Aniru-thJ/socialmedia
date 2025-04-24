import { Coment } from "../comment/Coment";
import "./post.scss";


export const Post = () => 
    {
      const dummyPosts = [
        {
          id: "post1",
          name: "Priya Sharma",
          userId: "user123",
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s",
          desc: "Enjoying a beautiful sunset by the beach! 🌅 #beachlife #sunsetlover #travel",
          image: "https://images.pexels.com/photos/87812/pexels-photo-87812.jpeg?auto=compress&cs=tinysrgb&w=600",
          time: "1 min ago",
        },
        {
          id: "post2",
          name: "Kavya Suha",
          userId: "user456",
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVl4Hxt_6y4sQLGR1AaSDfWgb3WVcSPi7YHw&s",
          desc: "Just finished a great workout session! 💪 #fitness #gymmotivation #healthylifestyle",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVl4Hxt_6y4sQLGR1AaSDfWgb3WVcSPi7YHw&s",
          time: "10 mins ago",
      
        },
        {
          id: "post3",
          name: "Sneha Patel",
          userId: "user789",
          profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
          desc: "Delicious homemade pasta for dinner tonight! 🍝 #foodie #homemade #pasta",
          image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600",
          time: "18 mins ago",
        },
        {
          id: "post4",
          name: "Amit Singh",
          userId: "user101",
          profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
          desc: "Exploring the historical streets of Jaipur. So much culture! 🏛️ #india #travelindia #jaipur",
          time: "1 hour ago",
        },
        // You can add more dummy post objects here
      ];
  return (
    <div className="post">
      {dummyPosts.map(post=>(<Coment post={post} key={post.id}/>
      ))

      }
    </div>
  )
}
