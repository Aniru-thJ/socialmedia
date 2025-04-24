import "./home.scss";
import { Stories } from "../../components/stories/Stories";
import {Post} from "../../components/post/Post";

export const Home = () => {
  return (
    <div className="home">
    <Stories/>
    <Post/>
    </div>
  )
}
