import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import HelloIcon from "../../assets/HelloIcon.png";
import "./Home.scss";
import data from "../../assets/data/data.json";
import { useState } from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import Modal from "../CommonComponents/Modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const createPost = () => {
    setIsOpen(true)
  };
  const close = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={close}><CreateAccount/></Modal>
      <div className="home-container">
        <div className="user-details-container">
          <p className="user-name-text">Hello Jane</p>
          <p className="general-message">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreatePost postClicked={createPost} />
        {data.map((post) => {
          return (
            <Post
              userName={post.postOwner}
              posted={post.posted}
              postOwnerDp={post.postOwnerDP}
              postContent={post.postContent}
              icon={HelloIcon}
              totalComments={post.totalComments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
