import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentPane from "./components/ContentPane";
import Tweet from "./components/Tweet";
import { FiTwitter } from 'react-icons/fi';
import "./App.scss";

function App() {
  return (
    <div className='body'>
      <Header />
      <div className="body-container">
        <Sidebar />
        <div className="body-section">
          <ContentPane title={"Tweets"} symbol={<FiTwitter />}>
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <Tweet index="1" content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
          </ContentPane>
        </div>
      </div>
    </div>
  );
}

export default App;
