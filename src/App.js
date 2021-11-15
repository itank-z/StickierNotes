import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentPane from "./components/ContentPane";
import Tweet from "./components/Tweet";
import Post from "./components/Post";
import { FiTwitter } from 'react-icons/fi';
import { MdOutlineStickyNote2 } from "react-icons/md";
import "./App.scss";

function App() {
  return (
    <div className='body'>
      <Header />
      <div className="body-container">
        <Sidebar />
        <div className="body-section">
          <ContentPane contentPaneType="tweets" title={"Tweets"} symbol={<FiTwitter />}>
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
          </ContentPane>


          <ContentPane contentPaneType="posts" title={"Posts"} symbol={<MdOutlineStickyNote2 />}>
            <Post index="1" title={"Post Title"} content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Post index="1" title={"Post Title"}  content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Post index="1" title={"Post Title"}  content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Post index="1" title={"Post Title"}  content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Post index="1" title={"Post Title"}  content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
          </ContentPane>
        </div>
      </div>
    </div>
  );
}

export default App;
